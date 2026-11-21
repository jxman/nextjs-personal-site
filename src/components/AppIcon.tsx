import Image from 'next/image'
import { FaCarSide } from 'react-icons/fa'

interface AppIconProps {
  name: string
  icon?: string
  size: number
}

export default function AppIcon({ name, icon, size }: AppIconProps) {
  if (icon) {
    return (
      <Image
        src={icon}
        alt={`${name} app icon`}
        width={size}
        height={size}
        className="rounded-[22%] shadow-md flex-shrink-0"
        unoptimized
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`${name} app icon`}
      className="rounded-[22%] shadow-md flex-shrink-0 bg-gradient-to-br from-primary to-secondary text-primary-content flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <FaCarSide style={{ width: size * 0.55, height: size * 0.55 }} />
    </div>
  )
}
