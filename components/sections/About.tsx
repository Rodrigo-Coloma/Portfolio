export default function About() {
  return (
    <section className="bg-[#F5F0DA] border-t border-[#584C25]/15 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-8 lg:px-12">

        {/* Eyebrow */}
        <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#584C25]/70 mb-2">
          The story
        </p>
        <h2 className="text-stone-900 text-3xl font-light tracking-[-0.01em] mb-10 max-w-xl">
          From clinical labs to data platforms — the same instinct, different stack.
        </h2>

        <div className="space-y-6 text-stone-700 text-[15px] leading-[1.8] font-light">
          <p>
            I started inside hospital and pharma labs. Four years at Hospital 12 de Octubre running
            haematology, biochemistry, and microbiology assays — work where a misplaced decimal can
            change a diagnosis. Along the way I co-authored statistical analysis for{' '}
            <span className="text-stone-900 font-normal">10+ peer-reviewed publications</span>.
          </p>

          <p>
            The pivot started at Macrogen. The company had no data infrastructure, so I built one
            from scratch — warehouse, ETL, reporting layer — while still running lab operations.
            That is when I realised data engineering was the part of the job I kept wanting to
            extend. Ironhack&apos;s Data Analytics Bootcamp{' '}
            <span className="text-stone-500">(Best Final Project Award, 2024)</span>{' '}
            sealed the move.
          </p>

          <p>
            Since then it has been hospitality (Ilunion Hotels — production ML, 50+ Power BI
            reports), and now leading a data + AI team at Grupo Ilunion building cloud architecture
            and shipping LLM applications. The pharmacy background is not the headline, but it
            shows up every day: a precision instinct around messy data, comfort with domain-heavy
            stakeholders, and a strong allergy to numbers that look right but aren&apos;t.
          </p>
        </div>

        {/* Accent line */}
        <div className="w-12 h-px bg-[#584C25]/40 my-12" />

        {/* Human element */}
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#584C25]/70 mb-3">
            Outside the editor
          </p>
          <p className="text-stone-700 text-[15px] leading-[1.8] font-light max-w-xl">
            Long-distance hiking in the sierras around Madrid, the occasional pickup football
            match, and a slow but real attempt to read more German than the duolingo streak
            requires.{' '}
            <span className="text-stone-400 italic">
              (placeholder — drop in your real hobby here)
            </span>
          </p>
        </div>

      </div>
    </section>
  )
}
