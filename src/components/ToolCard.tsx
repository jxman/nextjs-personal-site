import { FaExternalLinkAlt } from 'react-icons/fa'

interface ToolCardProps {
  name: string
  description: string
  url: string
  badge?: string
  category?: string
}

export default function ToolCard({
  name,
  description,
  url,
  badge,
  category,
}: ToolCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full border border-base-200"
    >
      <div className="card-body p-5">
        {(badge || category) && (
          <div className="flex flex-wrap gap-1 mb-1">
            {badge && (
              <div className="badge badge-primary badge-sm">{badge}</div>
            )}
            {category && (
              <div className="badge badge-ghost badge-sm">{category}</div>
            )}
          </div>
        )}
        <h3 className="card-title text-base flex items-center justify-between gap-2">
          {name}
          <FaExternalLinkAlt className="w-3 h-3 text-base-content/40 shrink-0" />
        </h3>
        <p className="text-sm text-base-content/70 leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  )
}
