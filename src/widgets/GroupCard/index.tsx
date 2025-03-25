import { useNavigate } from 'react-router-dom'
import { Group } from '../../entities/group/lib/types'
import { DisciplineItem } from '../DisciplineItem'

interface GroupCardProps {
  group: Group
  onToggleExpand: () => void
  onAddDiscipline: () => void
  onDeleteGroup: () => void
  onDeleteDiscipline: (discId: string) => void
}

export function GroupCard({
  group,
  onToggleExpand,
  onAddDiscipline,
  onDeleteGroup,
  onDeleteDiscipline,
}: GroupCardProps) {
  const navigation = useNavigate()
  const { name, isExpanded, disciplines } = group


  return (
    <div className="border-2 rounded-xl p-4">
      {/* Шапка группы */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-lg font-semibold">
          Группа: <span className="ml-1">{name}</span>
        </div>
        <div className="flex items-center space-x-2">
          {/* Кнопка развёртывания */}
          <button
            onClick={onToggleExpand}
            className="bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-2 rounded"
            title="Свернуть/Развернуть"
          >
            {isExpanded ? '▲' : '▼'}
          </button>

          {/* Иконки (условно) */}
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-2 rounded"
            title="Открыть xlsx групп"
          >
            📁
          </button>

          <button
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-1 px-2 rounded"
            title="Открыть xlsx дисциплин"
            onClick={() => {
              navigation('/blank/')
            }}
          >
            📄
          </button>

          {/* Удаление группы */}
          <button
            onClick={onDeleteGroup}
            className="bg-red-400 hover:bg-red-500 text-white font-bold py-1 px-2 rounded"
            title="Удалить группу"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Контейнер для дисциплин */}
      {isExpanded && (
        <div className="border-t pt-4 mt-2">
          {/* Кнопка добавления дисциплины */}
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={onAddDiscipline}
              className="bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-4 rounded"
            >
              +
            </button>
            <a href="#" className="text-blue-600 hover:underline" title="Открыть xlsx дисциплин">
              Открыть xlsx дисциплин
            </a>
          </div>

          {/* Список дисциплин */}
          <div className="space-y-2">
            {disciplines.map((disc) => (
              <DisciplineItem key={disc.id} discipline={disc} onDelete={() => onDeleteDiscipline(disc.id)} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
