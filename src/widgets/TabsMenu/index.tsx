import { ActiveTab } from '@/processe/Main/lib/types'
import { TabLink } from '@/shared/ui/TabLink'
import { useMatch } from 'react-router-dom'


export function TabsMenu() {
  const matchDisciplines = useMatch('/disciplines')
  const matchStudentBody = useMatch('/student-body')
  let activeTab: ActiveTab = 'disciplines'
  if (matchStudentBody) {
    activeTab = 'student-body'
  } else if (matchDisciplines) {
    activeTab = 'disciplines'
  }
  return (
    <div className="flex gap-4 mt-0.5">
      <TabLink to="/disciplines" isActive={activeTab === 'disciplines'}>
        Таблица 1
      </TabLink>
      <TabLink to="/student-body" isActive={activeTab === 'student-body'}>
        Таблица 2
      </TabLink>
    </div>
  )
}
