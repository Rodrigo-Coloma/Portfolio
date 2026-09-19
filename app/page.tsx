import EditorShell from '@/components/editor/EditorShell'
import Hero from '@/components/sections/Hero'
import HowIWork from '@/components/sections/HowIWork'
import Projects from '@/components/sections/Projects'
import Stack from '@/components/sections/Stack'
import Contact from '@/components/sections/Contact'
import { buildSource } from '@/lib/source'

export default function Home() {
  const source = buildSource()
  return (
    <EditorShell source={source}>
      <Hero />
      <HowIWork />
      <Projects />
      <Stack />
      <Contact />
    </EditorShell>
  )
}
