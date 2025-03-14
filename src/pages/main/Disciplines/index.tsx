import { ButtonPushDisciplines } from '@/features/ButtonPushDisciplines'
import { ButtonPush } from '@/shared/ui/ButtonPush'
import { PageTitle } from '@/shared/ui/PageTitle'
import { DisciplinesTable } from '@/widgets/DisciplinesTable'

export function Disciplines() {

  return (
    <>
      <PageTitle>Дисциплины</PageTitle>
      <div className="mb-4">
        <ButtonPushDisciplines />
      </div>
      <DisciplinesTable />
    </>
  )
}
