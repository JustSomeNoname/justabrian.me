'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'
import { User } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ServerDetails {
  code: string
  guild: {
    name: string
    description: string
    id: string
    icon: string | null
    features: string[]
  }
  approximate_member_count: number
  approximate_presence_count: number
  position?: string
}

interface ServerDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  serverDetails: ServerDetails
}

export function ServerDetailsModal({ isOpen, onClose, serverDetails }: ServerDetailsModalProps) {
  if (!isOpen || !serverDetails) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-pink-500 dark:text-pink-400">Server Details</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4">
            <div className="flex items-center">
              {serverDetails.guild.icon ? (
                <Image
                  src={`https://cdn.discordapp.com/icons/${serverDetails.guild.id}/${serverDetails.guild.icon}.png`}
                  alt={serverDetails.guild.name}
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-4">
                  <User className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                </div>
              )}
              <h3 className="text-xl font-bold">{serverDetails.guild.name}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{serverDetails.guild.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-pink-500 dark:text-pink-400">Members</p>
                <p className="text-2xl font-bold">{serverDetails.approximate_member_count.toLocaleString()}</p>
              </div>
              <div>
                <p className="font-semibold text-pink-500 dark:text-pink-400">Online</p>
                <p className="text-2xl font-bold">{serverDetails.approximate_presence_count.toLocaleString()}</p>
              </div>
              {serverDetails.position && (
                <div className="col-span-2">
                  <p className="font-semibold text-pink-500 dark:text-pink-400">My Position</p>
                  <p className="text-xl font-bold">{serverDetails.position}</p>
                </div>
              )}
            </div>
            <div>
              <h4 className="font-semibold text-pink-500 dark:text-pink-400 mb-2">Features</h4>
              <div className="flex flex-wrap gap-2">
                {serverDetails.guild.features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200">
                    {feature.replace(/_/g, ' ').toLowerCase()}
                  </Badge>
                ))}
              </div>
            </div>
            <Button 
              className="w-full bg-pink-500 hover:bg-pink-600 text-white"
              onClick={() => window.open(`https://discord.gg/${serverDetails.code}`, '_blank')}
            >
              Join Server
            </Button>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

