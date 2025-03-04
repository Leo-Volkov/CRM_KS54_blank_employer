export function DisciplinesTable() {
  return (
    <table className="w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">№</th>
            <th className="p-2 border">Курс</th>
            <th className="p-2 border">Семестр (1/2)</th>
            <th className="p-2 border">Группа</th>
            <th className="p-2 border">Предметы</th>
            <th className="p-2 border">Действия</th>
          </tr>
        </thead>
        <tbody>
          {/* Одна примерная строка */}
          <tr>
            <td className="p-2 border text-center">1</td>
            <td className="p-2 border">
              {/* Поле редактирования курса */}
              <input className="border rounded px-2 py-1 w-full" type="number" defaultValue={1} />
            </td>
            <td className="p-2 border">
              <input className="border rounded px-2 py-1 w-full" type="number" defaultValue={2} />
            </td>
            <td className="p-2 border">
              <input className="border rounded px-2 py-1 w-full" type="text" defaultValue="ИСП9 - 45" />
            </td>
            <td className="p-2 border">
              <button className="border bg-white hover:bg-gray-100 px-2 py-1 rounded">Список предметов</button>
            </td>
            <td className="p-2 border">
              {/* Кнопки редактирования / удаления */}
              <div className="flex gap-2">
                <button className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded">✎</button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">🗑</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
  )
}
