import { useState } from 'react'
import { FilterGrup } from '../../features/FilterGrup'
import { GroupCard } from '../../widgets/GroupCard'
import { Group } from '../../entities/group/lib/types'

const initialGroups: Group[] = [
  {
    id: 'g1',
    name: '1ИСП11 - 45',
    isExpanded: true,
    disciplines: [
      { id: 'd1', title: 'Проектирование баз данных' },
      { id: 'd2', title: 'Проектирование баз данных' },
      { id: 'd3', title: 'Проектирование баз данных' },
      { id: 'd4', title: 'Проектирование баз данных' },
    ],
  },
  {
    id: 'g2',
    name: '2ИСП9 - 45',
    isExpanded: false,
    disciplines: [{ id: 'd5', title: 'Проектирование баз данных' }],
  },
]

export function PagesListGrup() {
  const [groups, setGroups] = useState<Group[]>(initialGroups)

  // Пример функции для обновления группы по id (сменить isExpanded, изменить дисциплины и т.д.)
  const updateGroup = (groupId: string, newData: Partial<Group>) => {
    setGroups((prev) => prev.map((g) => (g.id === groupId ? { ...g, ...newData } : g)))
  }

  // Пример добавления новой дисциплины
  const addDiscipline = (groupId: string) => {
    const newDisc = {
      id: Math.random().toString(36).slice(2),
      title: 'Новая дисциплина',
    }
    setGroups((prev) => prev.map((g) => (g.id === groupId ? { ...g, disciplines: [...g.disciplines, newDisc] } : g)))
  }

  // Пример удаления дисциплины
  const deleteDiscipline = (groupId: string, disciplineId: string) => {
    setGroups((prev) =>
      prev.map((g) =>
        g.id === groupId
          ? {
              ...g,
              disciplines: g.disciplines.filter((d) => d.id !== disciplineId),
            }
          : g,
      ),
    )
  }

  // Пример удаления всей группы
  const deleteGroup = (groupId: string) => {
    setGroups((prev) => prev.filter((g) => g.id !== groupId))
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Управление группами</h1>

      {/* Фильтрационная панель */}
      <FilterGrup />

      {/* Список групп */}
      <div className="mt-6 space-y-4">
        {groups.map((group) => (
          <GroupCard
            key={group.id}
            group={group}
            onToggleExpand={() => updateGroup(group.id, { isExpanded: !group.isExpanded })}
            onAddDiscipline={() => addDiscipline(group.id)}
            onDeleteGroup={() => deleteGroup(group.id)}
            onDeleteDiscipline={(discId) => deleteDiscipline(group.id, discId)}
          />
        ))}
      </div>
    </div>
  )
}
