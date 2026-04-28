const EDUCATION: { year: string; title: string; org: string; note?: string }[] = [
  {
    year:  '2023–24',
    title: 'Data Analytics Bootcamp',
    org:   'Ironhack',
    note:  'Best Final Project Award',
  },
  {
    year:  '2009–16',
    title: 'B. Pharmacy',
    org:   'Complutense University of Madrid',
  },
]

const LANGUAGES: { name: string; level: string }[] = [
  { name: 'Spanish', level: 'Native'  },
  { name: 'English', level: 'C2'      },
  { name: 'German',  level: 'A1'      },
]

export default function EduLanguages() {
  return (
    <section className="bg-[#fafaf7] border-t border-stone-200/70 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">

          {/* Education */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-stone-400 mb-6">
              Education
            </p>
            <div className="space-y-5">
              {EDUCATION.map(edu => (
                <div key={edu.title} className="flex items-baseline gap-6">
                  <span className="text-stone-400 text-xs font-mono tabular-nums w-16 flex-shrink-0">
                    {edu.year}
                  </span>
                  <div className="text-[14px] leading-snug">
                    <span className="text-stone-800 font-medium">{edu.title}</span>
                    <span className="text-stone-400 font-light"> · {edu.org}</span>
                    {edu.note && (
                      <p className="text-stone-500 text-[12px] font-light mt-0.5 italic">
                        {edu.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-stone-400 mb-6">
              Languages
            </p>
            <div className="space-y-3">
              {LANGUAGES.map(lang => (
                <div key={lang.name} className="flex items-baseline gap-6">
                  <span className="text-stone-800 text-[14px] font-medium w-20 flex-shrink-0">
                    {lang.name}
                  </span>
                  <span className="text-stone-500 text-[13px] font-light">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
