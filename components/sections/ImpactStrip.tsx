const METRICS: { value: string; label: string }[] = [
  { value: '9+',   label: 'years building data + ML'           },
  { value: '2',    label: 'LLM apps shipped to production'     },
  { value: '5+',   label: 'ML models in production'            },
  { value: '+5%',  label: 'accuracy on core forecasting model' },
  { value: '50+',  label: 'Power BI reports maintained'        },
  { value: '10+',  label: 'peer-reviewed publications'         },
]

export default function ImpactStrip() {
  return (
    <section className="bg-[#fafaf7] border-t border-stone-200/70 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">

        {/* Eyebrow */}
        <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-stone-400 mb-2">
          By the numbers
        </p>
        <h2 className="text-stone-900 text-3xl font-light tracking-[-0.01em] mb-12 max-w-xl">
          Nine years, shipped — measured where it counts.
        </h2>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-12">
          {METRICS.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-2">
              <span className="text-stone-900 text-4xl lg:text-[42px] font-light tracking-tight tabular-nums leading-none">
                {value}
              </span>
              <span className="text-stone-500 text-[13px] leading-snug font-light">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
