'use client'

import Image from 'next/image'
import { ExternalLink, Share2 } from 'lucide-react'

const teamMembers = [
  {
    id: '1',
    name: 'Shivam Verma',
    title: 'Founder & CEO',
    description:
      'Shapes product strategy and keeps the team focused on building ambitious, practical experiences.',
    location: 'Punjab, India',
    image: 'https://pbs.twimg.com/profile_images/2078349741495336960/dUbXTLtT_400x400.jpg',
    skills: ['Strategy', 'Leadership', 'Product'],
  },
  {
    id: '2',
    name: 'Sameer',
    title: 'CTO',
    description:
      'Leads platform architecture and mentors engineers to ship reliable systems at speed.',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    skills: ['Architecture', 'Backend', 'Mentoring'],
  },
  {
    id: '3',
    name: 'Shweta',
    title: 'Staff Frontend Engineer',
    description:
      'Builds the design system and crafts accessible interfaces for complex workflows.',
    location: 'Bengaluru, India',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    skills: ['React', 'Design Systems', 'Accessibility'],
  },
  {
    id: '4',
    name: 'James Smith',
    title: 'Product Designer',
    description:
      'Turns abstract ideas into clear product narratives and interaction patterns.',
    location: 'London, UK',
    image: 'https://images.pexels.com/photos/11451534/pexels-photo-11451534.jpeg?_gl=1*10bq848*_ga*MTE3ODY5MDUxNC4xNzgyNDk1NTQ0*_ga_8JE65Q40S6*czE3ODQ4MDExNTIkbzIkZzEkdDE3ODQ4MDE5MDQkajI3JGwwJGgw',
    skills: ['UX Design', 'Prototyping', 'User Research'],
  },
  {
    id: '5',
    name: 'Hitesh Choudhary',
    title: 'QA Lead',
    description:
      'Protects product quality with rigorous release checks and thoughtful testing strategy.',
    location: 'Jaipur, India',
    image: 'https://images.pexels.com/photos/34423740/pexels-photo-34423740.jpeg',
    skills: ['QA', 'Testing', 'Automation'],
  },
  {
    id: '6',
    name: 'Priya Patel',
    title: 'Lead UX Researcher',
    description:
      'Brings customer insights into every planning cycle to sharpen product direction.',
    location: 'Delhi, India',
    image: 'https://images.pexels.com/photos/8095705/pexels-photo-8095705.jpeg?_gl=1*1ho8cj5*_ga*MTE3ODY5MDUxNC4xNzgyNDk1NTQ0*_ga_8JE65Q40S6*czE3ODQ4MDExNTIkbzIkZzEkdDE3ODQ4MDIxODYkajEyJGwwJGgw',
    skills: ['Research', 'Analytics', 'Insights'],
  },
]

export function TeamPage() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Team
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Practical operators
            <br />
            with product depth.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            A focused group combining research, design, engineering, and quality
            to ship clear, customer-facing outcomes.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header with avatar */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-blue-600">
                    <img
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.title}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {member.description}
              </p>

              {/* Location and actions */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <p className="text-xs font-medium text-gray-500">{member.location}</p>
                <div className="flex items-center gap-2">
                  <button
                    className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                    title="External Link"
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

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
