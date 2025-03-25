import React, { useState } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { Discipline } from '@/entities/discipline/lib/types'

export function getColumns(setData: React.Dispatch<React.SetStateAction<Discipline[]>>): ColumnDef<Discipline>[] {
  return [
    {
      accessorKey: 'id',
      header: '№',
      cell: (info) => <div className="text-center">{String(info.row.index + 1)}</div>,
    },
    {
      accessorKey: 'discipline',
      header: 'Предметы',
      cell: ({ getValue, row, column }) => {
        const [localValue, setLocalValue] = useState<string>(String(getValue()))
        const [error, setError] = useState<string | null>(null)

        const handleChange = (newValue: string) => {
          setLocalValue(newValue)
          if (newValue.trim().length < 2) {
            setError('Минимум 2 символа')
          } else {
            setError(null)
          }
        }

        const handleBlur = () => {
          if (!error) {
            setData((oldData) =>
              oldData.map((item, index) => {
                if (index === row.index) {
                  return { ...item, [column.id]: localValue }
                }
                return item
              }),
            )
          }
        }

        return (
          <div className="flex flex-col sm:w-100 md:w-125">
            <input
              type="text"
              value={localValue}
              onChange={(e) => handleChange(e.target.value)}
              onBlur={handleBlur}
              placeholder="Введите предмет"
              className={`
                border px-2 py-1 rounded text-center
                ${error ? 'border-red-500' : 'border-gray-300'}
                focus:outline-none focus:ring-1 focus:ring-blue-500
              `}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          </div>
        )
      },
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
