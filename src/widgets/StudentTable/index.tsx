export function StudentTable() {
  return (
    <table className="w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">№</th>
            <th className="p-2 border">Курс</th>
            <th className="p-2 border">Группа</th>
            <th className="p-2 border">ФИО</th>
            <th className="p-2 border">Работодатель</th>
            <th className="p-2 border">Удалить</th>
          </tr>
        </thead>
        <tbody>
          {/* Пример строки */}
          <tr>
            <td className="p-2 border text-center">1</td>
            <td className="p-2 border">
              <input className="border rounded px-2 py-1 w-full" type="number" defaultValue={2} />
            </td>
            <td className="p-2 border">
              <input className="border rounded px-2 py-1 w-full" type="text" defaultValue="ИСП9 - 45" />
            </td>
            <td className="p-2 border">
              <input className="border rounded px-2 py-1 w-full" type="text" defaultValue="Иванов Иван Иванович" />
            </td>
            <td className="p-2 border">
              <button className="bg-white hover:bg-gray-100 px-2 py-1 rounded border">Бланк работодателя</button>
            </td>
            <td className="p-2 border">
              <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">🗑</button>
            </td>
          </tr>
          {/* Другие строки аналогично */}
        </tbody>
      </table>
  )
}
