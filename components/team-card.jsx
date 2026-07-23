'use client'

import Image from 'next/image'
import { ExternalLink, Share2 } from 'lucide-react'


export function TeamCard({
  name,
  title,
  description,
  location,
  image,
  status,
  statusType = 'chat',
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header with avatar and status */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-blue-600">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

      {/* Location and actions */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <p className="text-xs font-medium text-gray-500">{location}</p>
        <div className="flex items-center gap-2">
          <button
            className="p-1.5 hover:bg-gray-100 rounded transition-colors"
            title="LinkedIn"
          >
            <ExternalLink className="w-4 h-4 text-gray-400 hover:text-gray-600" />
          </button>
          <button
            className="p-1.5 hover:bg-gray-100 rounded transition-colors"
            title="Share"
          >
            <Share2 className="w-4 h-4 text-gray-400 hover:text-gray-600" />
          </button>
        </div>
      </div>

      {/* Status button */}
      <button
        className={`w-full py-2 px-3 rounded text-sm font-medium transition-colors ${
          statusType === 'chat'
            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            : 'text-gray-600 hover:bg-gray-50'
        }`}
      >
        {status}
      </button>
    </div>
  )
}
