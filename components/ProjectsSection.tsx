import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Repo {
  name: string
  description: string
  html_url: string
  language: string
}

export default function ProjectsSection({ repos }: { repos: Repo[] }) {
  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-400 dark:to-purple-400">
        プロジェクト
        <span className="block text-xl mt-1 font-normal">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <Card key={repo.name} className="group hover:shadow-xl transition-all duration-300 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border-white/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-xl group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">
                {repo.name}
              </CardTitle>
              <CardDescription>{repo.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="bg-white/50 dark:bg-gray-900/50">
                  {repo.language}
                </Badge>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-pink-500 dark:text-pink-400 hover:text-pink-600 dark:hover:text-pink-500 transition-colors"
                >
                  View on GitHub
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

