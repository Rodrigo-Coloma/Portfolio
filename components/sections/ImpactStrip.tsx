import StampLabel from '@/components/StampLabel'
import RoughUnderline from '@/components/RoughUnderline'

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
    <section className="bg-[#FFFCF6] border-t border-[#14B8A6]/30 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">

        {/* Eyebrow */}
        <div className="mb-3">
          <StampLabel boxed>By the numbers</StampLabel>
        </div>
        <h2 className="text-stone-900 text-3xl font-light tracking-[-0.01em] mb-12 max-w-xl">
          Nine years, <RoughUnderline>shipped</RoughUnderline> — measured where it counts.
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
