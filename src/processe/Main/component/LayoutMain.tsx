import { HeanderMainPage } from '@/widgets/HeanderMainPage'
import { Outlet } from 'react-router-dom'

export function LayoutMain() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <HeanderMainPage />
      <main className="p-4">
        <div className="bg-white p-4 rounded shadow">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
