import Section from '@/components/sections/Section'
import { PROFILE, CONTACT_BLURB } from '@/lib/site'

export default function Contact() {
  return (
    <Section id="contact" title="Let's talk" file="contact.md" last>
      <p className="text-[17px] leading-[1.5] text-ink-body max-w-[560px] mb-6">{CONTACT_BLURB}</p>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-[16px]">
        <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
      </div>
      <p className="mt-10 font-mono text-[11.5px] text-ink-faint">Reply within 24 hours, usually faster.</p>
    </Section>
  )
}
