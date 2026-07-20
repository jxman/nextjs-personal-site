#!/bin/bash

# Deployment script for the Next.js static export (S3 + CloudFront)
# Opens the deployed site in the default browser when done.
# Usage: ./scripts/deploy.sh [options]
#
# Options:
#   --dry-run           Build and show what would sync, without uploading or invalidating
#   --skip-build        Reuse the existing out/ directory instead of rebuilding
#   --skip-invalidate   Sync to S3 but skip the CloudFront invalidation
#   --invalidate-only   Skip build and sync, only invalidate CloudFront
#   --yes                Skip the production confirmation prompt
#   -h, --help           Show this help message

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status()  { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error()   { echo -e "${RED}[ERROR]${NC} $1"; }

# Config (overridable via env vars, matching .env.example)
BUCKET="${AWS_S3_BUCKET:-www.synepho.com}"
DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-E2UW9JLSX34HRT}"
SITE_URL="https://www.synepho.com"
BUILD_DIR="out"

# Move to repo root regardless of where the script is invoked from
cd "$(dirname "$0")/.."

# Flags
DRY_RUN=false
SKIP_BUILD=false
SKIP_INVALIDATE=false
INVALIDATE_ONLY=false
ASSUME_YES=false

show_help() {
    echo "Usage: $0 [options]"
    echo ""
    echo "Options:"
    echo "  --dry-run           Build and show what would sync, without uploading or invalidating"
    echo "  --skip-build        Reuse the existing out/ directory instead of rebuilding"
    echo "  --skip-invalidate   Sync to S3 but skip the CloudFront invalidation"
    echo "  --invalidate-only   Skip build and sync, only invalidate CloudFront"
    echo "  --yes               Skip the production confirmation prompt"
    echo "  -h, --help          Show this help message"
    echo ""
    echo "Environment overrides:"
    echo "  AWS_S3_BUCKET, CLOUDFRONT_DISTRIBUTION_ID, AWS_REGION"
}

for arg in "$@"; do
    case $arg in
        --dry-run) DRY_RUN=true ;;
        --skip-build) SKIP_BUILD=true ;;
        --skip-invalidate) SKIP_INVALIDATE=true ;;
        --invalidate-only) INVALIDATE_ONLY=true ;;
        --yes) ASSUME_YES=true ;;
        -h|--help) show_help; exit 0 ;;
        *)
            print_error "Unknown option: $arg"
            show_help
            exit 1
            ;;
    esac
done

check_prerequisites() {
    print_status "Checking prerequisites..."

    if ! command -v aws &> /dev/null; then
        print_error "AWS CLI is not installed. Please install it first."
        exit 1
    fi

    if ! aws sts get-caller-identity &> /dev/null; then
        print_error "AWS credentials not configured or invalid."
        print_status "Run 'aws configure' or set AWS environment variables."
        exit 1
    fi

    print_success "All prerequisites met!"
}

show_config() {
    print_status "Deployment Configuration:"
    echo "  S3 Bucket: $BUCKET"
    echo "  CloudFront Distribution: $DISTRIBUTION_ID"
    echo "  Site URL: $SITE_URL"
    echo "  AWS Account: $(aws sts get-caller-identity --query Account --output text)"
    echo "  Dry Run: $DRY_RUN"
    echo ""
}

build_site() {
    if [ "$SKIP_BUILD" = true ]; then
        print_warning "Skipping build (--skip-build)."
        return
    fi

    print_status "Building static export..."
    npm run build

    if [ ! -d "$BUILD_DIR" ] || [ ! -f "$BUILD_DIR/index.html" ]; then
        print_error "Build output not found at ./$BUILD_DIR/index.html"
        exit 1
    fi

    print_success "Build completed!"
}

sync_to_s3() {
    local dryrun_flag=()
    if [ "$DRY_RUN" = true ]; then
        dryrun_flag=(--dryrun)
        print_warning "Dry run: no files will actually be uploaded."
    fi

    print_status "Syncing assets (long cache, immutable)..."
    aws s3 sync "./$BUILD_DIR/" "s3://$BUCKET" \
        "${dryrun_flag[@]}" \
        --delete \
        --cache-control "max-age=31536000,immutable" \
        --exclude '*.html'

    print_status "Syncing HTML files (no cache)..."
    aws s3 sync "./$BUILD_DIR/" "s3://$BUCKET" \
        "${dryrun_flag[@]}" \
        --cache-control "max-age=0,must-revalidate" \
        --exclude '*' \
        --include '*.html'

    print_success "Sync completed!"
}

invalidate_cache() {
    if [ "$SKIP_INVALIDATE" = true ]; then
        print_warning "Skipping CloudFront invalidation (--skip-invalidate)."
        return
    fi

    if [ "$DRY_RUN" = true ]; then
        print_warning "Dry run: skipping CloudFront invalidation."
        return
    fi

    print_status "Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths '/*'
    print_success "CloudFront invalidation initiated!"
}

confirm_production() {
    if [ "$ASSUME_YES" = true ] || [ "$DRY_RUN" = true ]; then
        return
    fi

    echo ""
    print_warning "You are about to deploy to PRODUCTION: $SITE_URL"
    read -p "Type 'yes' to continue: " confirm
    if [ "$confirm" != "yes" ]; then
        print_status "Deployment cancelled."
        exit 0
    fi
}

open_site() {
    if [ "$DRY_RUN" = true ]; then
        return
    fi

    if command -v open &> /dev/null; then
        open "$SITE_URL"
    fi
}

main() {
    echo "=========================================="
    echo "Synepho.com Deployment"
    echo "=========================================="
    echo ""

    check_prerequisites
    show_config

    if [ "$INVALIDATE_ONLY" = true ]; then
        confirm_production
        invalidate_cache
        echo ""
        print_success "Invalidation complete: $SITE_URL"
        open_site
        exit 0
    fi

    confirm_production
    build_site
    sync_to_s3
    invalidate_cache

    echo ""
    print_success "Deployment complete: $SITE_URL"
    open_site
}

main
