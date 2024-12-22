import Image from 'next/image'
import Link from 'next/link'
import { Github, Mail, Cherry } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import DiscordServersSection from '@/components/DiscordServersSection'
import { ThemeToggle } from '@/components/ThemeToggle'

async function getDiscordServers() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/discord-servers`, { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to fetch Discord servers')
    return res.json()
  } catch (error) {
    console.error('Error fetching Discord servers:', error)
    return { team: [], featured: [] }
  }
}

export default async function Home() {
  const githubUsername = 'JustSomeNoname'
  const githubApiUrl = `https://api.github.com/users/${githubUsername}`
  const reposUrl = `${githubApiUrl}/repos`

  const [userData, reposData, discordServers] = await Promise.all([
    fetch(githubApiUrl).then(res => res.json()).catch(() => ({})),
    fetch(reposUrl).then(res => res.json()).catch(() => []),
    getDiscordServers()
  ])

  const filteredRepos = reposData.filter(repo => 
    ['AGC-MineTools', 'AGC-Utils'].includes(repo.name)
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <main className="flex min-h-screen flex-col items-center px-4 py-16 sm:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[url('/sakura-pattern.png')] opacity-[0.02] dark:opacity-[0.03] rotate-12 animate-[drift_60s_linear_infinite]" />
        </div>

        <div className="z-10 max-w-4xl w-full">
          <div className="flex justify-between items-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-400 dark:to-purple-400 font-japanese">
              ブライアン
              <span className="block text-2xl sm:text-3xl mt-2 font-normal"></span>
            </h1>
            <ThemeToggle />
          </div>
          
          <div className="flex flex-col items-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-purple-500/10 dark:from-pink-500/5 dark:to-purple-500/5 rounded-full blur-3xl" />
            <Image
              src="https://cdn.discordapp.com/avatars/515404778021322773/59a6286257175b6ee0ab58b6bf3304fc.webp?size=512"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full border-4 border-white dark:border-gray-800 shadow-xl relative"
            />
            <Cherry className="text-pink-500 dark:text-pink-400 absolute -right-4 -top-4 rotate-12" />
          </div>

          <p className="text-center text-xl mb-12 px-6 py-8 bg-white/40 dark:bg-gray-800/40 rounded-2xl backdrop-blur-sm border border-white/50 dark:border-gray-700/50 shadow-xl">
            {userData.bio || "Hey, I'm Brian! I'm a passionate developer and moderating some discord communities"}
          </p>

          <div className="flex justify-center space-x-4 mb-16">
            <Button asChild className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 transition-opacity">
              <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-2 border-pink-500/50 dark:border-pink-400/50 hover:bg-pink-500/10 dark:hover:bg-pink-400/10">
              <a href="https://discord.com/users/515404778021322773" target="_blank" rel="noopener noreferrer">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </a>
            </Button>
          </div>

          <div className="space-y-16">
            <ProjectsSection repos={filteredRepos} />
            <SkillsSection />
            <DiscordServersSection servers={discordServers} />
          </div>

          <footer className="mt-16 text-center">
            <Link 
              href="/impressum" 
              className="px-6 py-3 text-sm text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              Impressum
            </Link>
          </footer>
        </div>
      </main>
    </div>
  )
}

