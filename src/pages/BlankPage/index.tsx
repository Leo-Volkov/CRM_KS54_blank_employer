import { useState } from 'react'

interface BlankPageProps {
  groupName: string // например, "1ИСП9 - 45"
  // Можете передавать любые другие пропсы, если нужно
}

export function BlankPage({ groupName }: BlankPageProps) {
  // Локальное состояние формы (для примера используем useState)
  // В реальном проекте можно использовать React Hook Form, Redux Toolkit etc.
  const [semester, setSemester] = useState('1') // «Семестр (1/2)»
  const [students, setStudents] = useState('Иванов Иван Иванович')
  const [company, setCompany] = useState('ООО “Купишуз”')
  const [startDate, setStartDate] = useState('25.05.2023')
  const [position, setPosition] = useState('Оператор WMS')

  // Обработчики
  const handleSave = () => {
    // Логика сохранения: например, отправка данных на сервер или в Go-функцию.
    console.log('Данные формы:', {
      semester,
      students,
      company,
      startDate,
      position,
    })
    alert('Сохранено!')
  }

  const handleDownloadBlank = () => {
    // Логика скачивания бланка (может быть генерация XLSX/PDF на бэкенде)
    console.log('Скачать бланк...')
    alert('Загружаем бланк...')
  }

  return (
    <div className="p-4">
      {/* Заголовок с названием группы */}
      <h1 className="text-2xl font-bold mb-6">Группа: {groupName}</h1>

      {/* Семестр и студенты */}
      <div className="mb-4 flex items-center gap-4">
        <label className="flex items-center gap-2">
          <span className="font-semibold">Семестр (1/2):</span>
          <input
            type="text"
            className="border p-1 rounded w-16"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          />
        </label>
        <label className="flex items-center gap-2">
          <span className="font-semibold">Студенты:</span>
          <input
            type="text"
            className="border p-1 rounded"
            value={students}
            onChange={(e) => setStudents(e.target.value)}
          />
        </label>

        {/* Ссылка "Открыть xlsx студентов" */}
        <a href="#" className="text-blue-600 hover:underline whitespace-nowrap">
          Открыть xlsx студентов
        </a>
      </div>

      {/* Предприятие */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Предприятие</label>
        <input
          type="text"
          className="border p-1 rounded w-full max-w-sm"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {/* Дата начала работы */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Дата начала работы</label>
        <input
          type="text"
          className="border p-1 rounded w-full max-w-sm"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      {/* Должность */}
      <div className="mb-6">
        <label className="block font-semibold mb-1">Должность</label>
        <input
          type="text"
          className="border p-1 rounded w-full max-w-sm"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>

      {/* Кнопки "Сохранить" и "Скачать бланк" */}
      <div className="flex gap-4">
        <button
          className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded"
          onClick={handleSave}
        >
          Сохранить
        </button>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
          onClick={handleDownloadBlank}
        >
          Скачать бланк
        </button>
      </div>
    </div>
  )
}
