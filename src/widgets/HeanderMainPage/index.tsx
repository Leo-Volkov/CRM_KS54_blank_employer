import { TabsMenu } from "../TabsMenu";

export function HeanderMainPage() {
  return (
    <header className="bg-header-bg text-white px-4 pt-4">
        <h1 className="text-2xl font-bold">CRM для студентов</h1>
        <TabsMenu />
    </header>
  )
}
