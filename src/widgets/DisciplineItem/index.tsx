import { Discipline } from '../../entities/discipline/lib/types'

interface DisciplineItemProps {
  discipline: Discipline
  onDelete: () => void
}

export function DisciplineItem({ discipline, onDelete }: DisciplineItemProps) {
  return (
    <div className="border rounded-lg p-2 flex justify-between items-center">
      <div>{discipline.title}</div>
      <button
        onClick={onDelete}
        className="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-2 rounded"
        title="Удалить дисциплину"
      >
        ✕
      </button>
    </div>
  )
}
