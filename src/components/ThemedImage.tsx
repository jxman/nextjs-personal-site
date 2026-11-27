import Image from 'next/image'
import type { ComponentProps } from 'react'

type ImageProps = ComponentProps<typeof Image>

interface ThemedImageProps extends Omit<ImageProps, 'src'> {
  /** Screenshot shown when the site is in dark mode (a light-mode capture). */
  src: string
  /** Screenshot shown when the site is in light mode (a dark-mode capture). */
  srcDark?: string
  /** Intrinsic size of `srcDark` when it differs from `src` (avoids layout shift). */
  darkWidth?: number
  darkHeight?: number
}

/**
 * Shows the opposite-theme screenshot so it stands out against the page:
 * dark site -> light screenshot (`src`), light site -> dark screenshot (`srcDark`).
 * Falls back to a single image when no dark variant exists.
 *
 * With two variants, `priority` is not forwarded (it would preload the hidden
 * one too). Instead the lazy-loaded hidden image is never fetched, and the
 * visible one gets `fetchPriority="high"`.
 */
export default function ThemedImage({
  src,
  srcDark,
  darkWidth,
  darkHeight,
  className = '',
  alt,
  priority,
  ...rest
}: ThemedImageProps) {
  if (!srcDark) {
    return (
      <Image
        src={src}
        alt={alt}
        className={className}
        priority={priority}
        {...rest}
      />
    )
  }
  const fetchPriority = priority ? 'high' : undefined
  return (
    <>
      <Image
        {...rest}
        src={srcDark}
        alt={alt}
        className={`${className} dark:hidden`}
        fetchPriority={fetchPriority}
        {...(darkWidth && darkHeight
          ? { width: darkWidth, height: darkHeight }
          : {})}
      />
      <Image
        {...rest}
        src={src}
        alt=""
        aria-hidden="true"
        className={`${className} hidden dark:block`}
        fetchPriority={fetchPriority}
      />
    </>
  )
}
