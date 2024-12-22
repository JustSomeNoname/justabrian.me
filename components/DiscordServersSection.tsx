'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ServerDetailsModal } from './ServerDetailsModal'

interface ServerData {
  code: string
  guild: {
    name: string
    description: string
    id: string
    icon: string
    features: string[]
  }
  approximate_member_count: number
  approximate_presence_count: number
  position?: string
}

interface DiscordServersProps {
  servers: {
    team: ServerData[]
    featured: ServerData[]
  }
}

function ServerCard({ server }: { server: ServerData }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card 
        className="cursor-pointer hover:shadow-xl transition-all duration-300 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border-white/50 dark:border-gray-700/50" 
        onClick={() => setIsModalOpen(true)}
      >
        <CardHeader>
          <CardTitle className="text-lg group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
            {server.guild.name}
          </CardTitle>
          <CardDescription>{server.guild.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <Badge variant="outline" className="bg-white/50 dark:bg-gray-900/50">
              Members: {server.approximate_member_count}
            </Badge>
            <Badge variant="outline" className="bg-white/50 dark:bg-gray-900/50">
              Online: {server.approximate_presence_count}
            </Badge>
          </div>
        </CardContent>
      </Card>
      <ServerDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serverDetails={server}
      />
    </>
  )
}

export default function DiscordServersSection({ servers }: DiscordServersProps) {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-400 dark:to-purple-400">
        Discord Communities
      </h2>
      
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-pink-600 dark:text-pink-400">Team Servers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servers.team.map((server) => (
            <ServerCard key={server.code} server={server} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">Featured Servers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servers.featured.map((server) => (
            <ServerCard key={server.code} server={server} />
          ))}
        </div>
      </div>
    </section>
  )
}

