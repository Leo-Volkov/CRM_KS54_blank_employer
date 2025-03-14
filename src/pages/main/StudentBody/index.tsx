import { FilterStudent } from '@/features/FilterStudent'
import { ButtonPush } from '@/shared/ui/ButtonPush'
import { PageTitle } from '@/shared/ui/PageTitle'
import { StudentTable } from '@/widgets/StudentTable'

export function StudentBody() {
  return (
    <>
      <PageTitle>Таблица 2</PageTitle>
      <FilterStudent />
      <div className="mb-4">
        <ButtonPush
          onClick={() => {
            console.log('Студент добавлен')
          }}
        >
          Добавить
        </ButtonPush>
      </div>
      <StudentTable />
    </>
  )
}
