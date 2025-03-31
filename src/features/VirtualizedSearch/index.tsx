import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  useCallback,
} from 'react'
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import classNames from 'classnames'

// Тип для элемента списка
interface Student {
  id: number
  fullName: string
}

interface VirtualizedSearchProps {
  data: Student[]          // Исходный список студентов
  placeholder?: string     // Подсказка в input
  maxDropdownHeight?: number // Высота выпадающего списка
  onSelect?: (value: Student) => void // Колбэк при выборе элемента
}

/**
 * Компонент автодополнения с виртуализированным списком.
 * @param data Массив студентов для поиска.
 * @param placeholder Текст placeholder в поле ввода.
 * @param maxDropdownHeight Высота выпадающего списка.
 * @param onSelect Колбэк, вызывается при клике по элементу списка.
 */
export function VirtualizedSearch({
  data,
  placeholder = 'Поиск...',
  maxDropdownHeight = 300,
  onSelect,
}: VirtualizedSearchProps) {
  const [query, setQuery] = useState('')
  const [filteredData, setFilteredData] = useState<Student[]>(data)
  const [isOpen, setIsOpen] = useState(false)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Фильтруем результаты при изменении запроса
  useEffect(() => {
    if (!query) {
      setFilteredData(data)
    } else {
      const lowerQuery = query.toLowerCase()
      setFilteredData(
        data.filter((item) => item.fullName.toLowerCase().includes(lowerQuery))
      )
    }
  }, [query, data])

  // Закрываем список при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Обработчик выбора элемента
  const handleSelect = useCallback(
    (student: Student) => {
      setQuery(student.fullName)
      setIsOpen(false)
      onSelect?.(student)
    },
    [onSelect]
  )

  // Рендер одного элемента списка для react-window
  const Row = ({ index, style }: ListChildComponentProps) => {
    const student = filteredData[index]
    return (
      <div
        style={style}
        className={classNames(
          'px-4 py-2 cursor-pointer hover:bg-gray-100 border-b'
        )}
        onClick={() => handleSelect(student)}
      >
        {student.fullName}
      </div>
    )
  }

  // Обработчик ввода в поисковое поле
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setIsOpen(true)
  }

  // При нажатии Enter выбираем первый элемент (при желании)
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && filteredData[0]) {
      handleSelect(filteredData[0])
    }
  }

  return (
    <div ref={containerRef} className="inline-block relative">
      <label className="font-semibold mr-2">Студенты:</label>
      <input
        ref={inputRef}
        type="text"
        className="
          border
          rounded
          px-3
          py-2
          focus:outline-none
          focus:ring-2
          focus:ring-blue-400
          w-64
        "
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsOpen(true)}
      />

      {/* Выпадающий список */}
      {isOpen && filteredData.length > 0 && (
        <div
          className="
            absolute
            right-[-75%]
            mt-1
            border
            bg-white
            rounded
            shadow-lg
            w-64
            z-10
          "
        >
          <FixedSizeList
            height={Math.min(filteredData.length * 40, maxDropdownHeight)}
            itemCount={filteredData.length}
            itemSize={40} // высота одной строки
            width={'100%'}
          >
            {Row}
          </FixedSizeList>
        </div>
      )}
    </div>
  )
}
