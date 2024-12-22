import { Badge } from '@/components/ui/badge'

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'HTML',
  'CSS',
  'Git',
  'Python',
  'Java',
]

export default function SkillsSection() {
  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-400 dark:to-purple-400">
        スキル
        <span className="block text-xl mt-1 font-normal">Skills</span>
      </h2>
      <div className="p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-white/50 dark:border-gray-700/50">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary"
              className="px-4 py-2 text-sm bg-white/50 dark:bg-gray-900/50 hover:bg-pink-500/10 dark:hover:bg-pink-400/10 transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

