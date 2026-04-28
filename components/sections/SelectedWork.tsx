import { PROJECTS, type Project } from '@/lib/projects'
import StampLabel from '@/components/StampLabel'
import RoughUnderline from '@/components/RoughUnderline'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={project.slug}
      className="scroll-mt-20 bg-white/60 border border-[#584C25]/15 rounded-sm p-8 lg:p-10
                 hover:border-[#14B8A6]/50 hover:bg-white/80 transition-colors"
    >
      {/* Header */}
      <div className="flex items-baseline justify-between gap-4 mb-6 flex-wrap">
        <div>
          <div className="mb-2">
            <StampLabel>{project.context}</StampLabel>
          </div>
          <h3 className="text-stone-900 text-2xl lg:text-[28px] font-light tracking-tight">
            {project.title}
          </h3>
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex items-center gap-3 text-[12px]">
            {project.links.map(link => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-stone-700 hover:text-stone-900 underline-offset-[5px] decoration-stone-300 hover:decoration-stone-700 hover:underline transition-all"
              >
                {link.label} {link.external ? '↗' : '→'}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Body grid */}
      <div className="grid lg:grid-cols-12 gap-x-10 gap-y-6">

        {/* Problem */}
        <div className="lg:col-span-6">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#584C25]/70 mb-2">Problem</p>
          <p className="text-stone-700 text-[14px] leading-[1.7] font-light">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="lg:col-span-6">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#584C25]/70 mb-2">Solution</p>
          <p className="text-stone-700 text-[14px] leading-[1.7] font-light">
            {project.solution}
          </p>
        </div>

        {/* Impact */}
        <div className="lg:col-span-7">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#584C25]/70 mb-2">Impact</p>
          <ul className="space-y-1.5">
            {project.impact.map(point => (
              <li
                key={point}
                className="text-stone-700 text-[14px] leading-[1.6] font-light flex gap-3"
              >
                <span className="text-[#14B8A6] mt-1 text-[10px] flex-shrink-0">▸</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stack */}
        <div className="lg:col-span-5">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#584C25]/70 mb-2">Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map(tech => (
              <span
                key={tech}
                className="font-mono text-[11px] text-stone-600 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </article>
  )
}

export default function SelectedWork() {
  return (
    <section className="bg-[#FFFCF6] border-t border-[#14B8A6]/30 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">

        {/* Eyebrow */}
        <div className="mb-3">
          <StampLabel boxed>Selected work</StampLabel>
        </div>
        <h2 className="text-stone-900 text-3xl font-light tracking-[-0.01em] mb-2 max-w-xl">
          Four projects, <RoughUnderline>end-to-end</RoughUnderline>.
        </h2>
        <p className="text-stone-500 text-[14px] leading-[1.7] font-light max-w-xl mb-12">
          A live side project, a production ML lift, a corporate cloud platform,
          and a green-field data stack. Different scopes, same shipping discipline.
        </p>

        {/* Cards */}
        <div className="space-y-6">
          {PROJECTS.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}
