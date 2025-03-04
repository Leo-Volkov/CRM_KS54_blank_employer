import { ButtonPush } from '@/shared/ui/ButtonPush'
import { PageTitle } from '@/shared/ui/PageTitle'
import { DisciplinesTable } from '@/widgets/DisciplinesTable'

export function Disciplines() {
  return (
    <>
      <PageTitle>Таблица 1</PageTitle>
      <div className="mb-4">
      <ButtonPush
          onClick={() => {
            console.log('Предмет добавлен')
          }}
        >
          Добавить предмет
        </ButtonPush>
      </div>
      <DisciplinesTable />
    </>
  )
}
