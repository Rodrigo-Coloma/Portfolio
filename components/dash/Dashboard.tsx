'use client'

import { FilterProvider } from '@/components/dash/filters'
import ReportBar from '@/components/dash/ReportBar'
import Slicers from '@/components/dash/Slicers'
import PageTabs from '@/components/dash/PageTabs'
import ProfileCard from '@/components/dash/ProfileCard'
import KpiGrid from '@/components/dash/KpiGrid'
import SkillsRadar from '@/components/dash/SkillsRadar'
import CareerTimeline from '@/components/dash/CareerTimeline'
import StackFlow from '@/components/dash/StackFlow'
import ProjectsTable from '@/components/dash/ProjectsTable'
import JokeDonut from '@/components/dash/JokeDonut'
import Principles from '@/components/dash/Principles'
import ContactCard from '@/components/dash/ContactCard'

export default function Dashboard({ asOf, refreshed }: { asOf: number; refreshed: string }) {
  return (
    <FilterProvider>
      <ReportBar refreshed={refreshed} />
      <main className="mx-auto max-w-[1480px] px-4 pb-[calc(var(--chrome-bottom)+32px)] pt-[var(--chrome-top)] sm:px-6">
        <Slicers />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <ProfileCard className="lg:col-span-5 xl:col-span-4" />
          <div className="flex min-w-0 flex-col gap-4 lg:col-span-7 xl:col-span-8">
            <KpiGrid />
            <CareerTimeline asOf={asOf} className="flex-1" />
          </div>

          <StackFlow className="lg:col-span-12" />

          <ProjectsTable className="lg:col-span-12" />

          <SkillsRadar className="lg:col-span-7" />
          <JokeDonut className="lg:col-span-5" />

          <Principles className="lg:col-span-12" />

          <ContactCard className="lg:col-span-12" />
        </div>
      </main>
      <PageTabs />
    </FilterProvider>
  )
}
