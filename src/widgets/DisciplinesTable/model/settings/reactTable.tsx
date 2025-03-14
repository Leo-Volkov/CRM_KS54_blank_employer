import { Group } from '@/entities/group/lib/types'
import { NumberInput } from '@/shared/ui/NumberInput'
import { ColumnDef } from '@tanstack/react-table'
import { MIN_COURSE, MAX_COURSE, MIN_SEMESTER, MAX_SEMESTER } from '../../lib/consts'
import { GroupCell } from '../../ui/GroupCell'
import { ListDiscipplines } from '@/features/ButtonListDiscipplines'

export function getColumns(setData: React.Dispatch<React.SetStateAction<Group[]>>): ColumnDef<Group, any>[] {
  return [
    {
      accessorKey: 'id',
      header: '№',
      cell: (info) => <div className="text-center">{info.getValue()}</div>,
    },
    {
      accessorKey: 'course',
      header: `Курс (${MIN_COURSE}/${MAX_COURSE})`,
      cell: ({ getValue, row, column }) => {
        const value = getValue<number>()
        const handleChange = (newValue: number) => {
          setData((oldData) =>
            oldData.map((item, index) => {
              if (index === row.index) {
                return { ...item, [column.id]: newValue }
              }
              return item
            }),
          )
        }

        return <NumberInput value={value} onChange={handleChange} min={MIN_COURSE} max={MAX_COURSE} />
      },
    },
    {
      accessorKey: 'semester',
      header: `Семестр (${MIN_SEMESTER}/${MAX_SEMESTER})`,
      cell: ({ getValue, row, column }) => {
        const value = getValue<number>()
        const handleChange = (newValue: number) => {
          setData((oldData) =>
            oldData.map((item, index) => {
              if (index === row.index) {
                return { ...item, [column.id]: newValue }
              }
              return item
            }),
          )
        }

        return <NumberInput value={value} onChange={handleChange} min={MIN_SEMESTER} max={MAX_SEMESTER} />
      },
    },
    {
      id: 'group',
      header: 'Группа',
      cell: (info) => {
        const rowIndex = info.row.index
        const rowData = info.row.original

        function updateRow(index: number, patch: Partial<Group>) {
          setData((old) =>
            old.map((item, idx) => {
              if (idx === index) {
                return { ...item, ...patch }
              }
              return item
            }),
          )
        }

        return <GroupCell rowIndex={rowIndex} rowData={rowData} updateRow={updateRow} />
      },
    },
    {
      id: 'discipplines',
      header: 'Предметы',
      cell: () => <ListDiscipplines />,
    },
    {
      id: 'actions',
      header: 'Действия',
      cell: (info) => {
        const rowData = info.row.original

        const handleDelete = () => {
          console.log('Deleting group with ID =', rowData.id)
        }

        return (
          <div className="flex gap-2">
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
              🗑
            </button>
          </div>
        )
      },
    },
  ]
}
