import { useState, useMemo, useEffect } from 'react'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { Group } from '@/entities/group/lib/types'
import { defaultData } from './lib/consts'
import { getColumns } from './model/settings/reactTable'

export function DisciplinesTable() {
  useEffect(() => {
    setData(defaultData)
  }, [])
  const [data, setData] = useState<Group[]>([])
  const columns = useMemo(() => getColumns(setData), [setData])
  const table = useReactTable<Group>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      setData,
    },
  })

  return (
    <table className="w-full border-collapse">
      <thead className="bg-gray-200">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="p-2 border">
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-2 border">
                <div className="flex justify-center">{flexRender(cell.column.columnDef.cell, cell.getContext())}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
