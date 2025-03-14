import { ButtonPush } from '@/shared/ui/ButtonPush'
import { PageTitle } from '@/shared/ui/PageTitle'
import { DisciplinesTable } from '@/widgets/DisciplinesTable'

export function Disciplines() {
  const handleClick = () => {
    console.log('Предмет добавлен')
  }
  return (
    <>
      <PageTitle>Дисциплины</PageTitle>
      <div className="mb-4">
        <ButtonPush onClick={handleClick}>Добавить предмет</ButtonPush>
      </div>
      <DisciplinesTable />
    </>
  )
}
