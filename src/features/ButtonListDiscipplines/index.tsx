import { ModalWrapper } from '@/shared/ui/ModalWrapper'
import { getColumns } from './model/settings/reactTable'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useEffect, useMemo, useState } from 'react'
import { Discipline } from '@/entities/discipline/lib/types'
import { ButtonPush } from '@/shared/ui/ButtonPush'

export const ListDiscipplines = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setData([
      {
        id: 1,
        discipline: 'Математика',
      },
      {
        id: 2,
        discipline: 'Физика',
      },
    ])
  }, [])

  const [data, setData] = useState<Discipline[]>([])
  const columns = useMemo(() => getColumns(setData), [setData])
  const table = useReactTable<Discipline>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      setData,
    },
  })

  const handlerAddDiscipline = () => {
    setData(
      (oldData) => [
        ...oldData,
        {
          id: oldData.length + 1,
          discipline: '',
        },
      ],
    )
  }
  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((is) => !is)}
        className="cursor-pointer border bg-white hover:bg-gray-100 px-2 py-1 rounded w-full"
      >
        Список предметов
      </button>

      <ModalWrapper isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="mx-auto p-6">
          <h2 className="text-xl font-semibold mb-4">Добавление дисциплин</h2>
          <div className="mb-4">
            <ButtonPush onClick={handlerAddDiscipline}>Добавить дисциплину</ButtonPush>
          </div>

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
                      <div className="flex justify-center">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ModalWrapper>
    </>
  )
}
