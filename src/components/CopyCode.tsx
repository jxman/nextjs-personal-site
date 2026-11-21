'use client'

import { useState } from 'react'
import { FaCheck, FaRegCopy } from 'react-icons/fa'

interface CopyCodeProps {
  code: string
}

export default function CopyCode({ code }: CopyCodeProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable (e.g. insecure context); the text stays selectable
    }
  }

  return (
    <div className="flex items-center gap-2 bg-base-300 rounded-lg pl-4 pr-1 py-1 mt-3 max-w-full">
      <code className="text-sm font-mono overflow-x-auto whitespace-nowrap flex-grow py-1">
        {code}
      </code>
      <button
        type="button"
        onClick={copy}
        className="btn btn-ghost btn-sm btn-square flex-shrink-0"
        aria-label={copied ? 'Copied' : `Copy ${code}`}
        title={copied ? 'Copied' : 'Copy'}
      >
        {copied ? (
          <FaCheck className="text-success" />
        ) : (
          <FaRegCopy className="opacity-70" />
        )}
      </button>
    </div>
  )
}
