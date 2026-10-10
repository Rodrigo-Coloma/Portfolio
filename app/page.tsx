import Dashboard from '@/components/dash/Dashboard'

export default function Home() {
  // Frozen at build time, like a report's last refresh.
  const now = new Date()
  const asOf = now.getFullYear() + now.getMonth() / 12
  const refreshed = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  return <Dashboard asOf={asOf} refreshed={refreshed} />
}
