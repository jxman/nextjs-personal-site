import Link from 'next/link'
import { FaArrowRight, FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import AppIcon from '@/components/AppIcon'
import { isExternal } from '@/lib/apps'
import type { App } from '@/types/app'

export default function AppCard({ app }: { app: App }) {
  const detailHref = `/apps/${app.slug}`
  const isDownload = app.primaryCta.label.toLowerCase().includes('download')

  return (
    <article className="card bg-base-100 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col border border-base-200">
      <div className="card-body p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 mb-3">
          <Link href={detailHref} aria-label={`Learn more about ${app.name}`}>
            <AppIcon name={app.name} icon={app.icon} size={64} />
          </Link>
          <div className="min-w-0">
            <h3 className="text-xl font-bold leading-tight">
              <Link href={detailHref} className="hover:text-primary">
                {app.name}
              </Link>
            </h3>
            <div className="flex flex-wrap gap-1 mt-1">
              {app.platforms.map((platform) => (
                <span key={platform} className="badge badge-outline badge-sm">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-base-content/75 leading-relaxed flex-grow">
          {app.tagline}
        </p>

        <div className="card-actions items-center justify-between gap-2 mt-4">
          <Link href={detailHref} className="btn btn-ghost btn-sm px-2">
            Learn more <FaArrowRight className="w-3 h-3" />
          </Link>
          <a
            href={app.primaryCta.href}
            {...(isExternal(app.primaryCta.href)
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="btn btn-primary btn-sm"
          >
            {isDownload ? (
              <>
                <FaDownload className="w-3 h-3" /> Download
              </>
            ) : (
              <>
                Open app <FaExternalLinkAlt className="w-3 h-3" />
              </>
            )}
          </a>
        </div>
      </div>
    </article>
  )
}
