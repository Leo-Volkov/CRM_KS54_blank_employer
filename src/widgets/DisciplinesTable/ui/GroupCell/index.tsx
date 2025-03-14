import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import type { Group } from '@/entities/group/lib/types'

interface GroupCellProps {
  rowIndex: number
  rowData: Group
  updateRow: (index: number, patch: Partial<Group>) => void
}

type GroupFormValues = {
  specialty: string
  graduation: string
  groupsNum: string
}

export function GroupCell({ rowIndex, rowData, updateRow }: GroupCellProps) {
  const [isEditing, setIsEditing] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    watch,
    trigger,
  } = useForm<GroupFormValues>({
    defaultValues: {
      specialty: rowData.specialty,
      graduation: rowData.graduation,
      groupsNum: rowData.groupsNum,
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const onSubmit: SubmitHandler<GroupFormValues> = (formData) => {
    updateRow(rowIndex, formData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    if (isDirty) {
      const confirmDiscard = window.confirm('У вас есть несохранённые изменения. Отменить?')
      if (!confirmDiscard) return
    }
    reset()
    setIsEditing(false)
  }

  const displayString = `${rowData.specialty}${rowData.graduation} - ${rowData.groupsNum}`

  if (!isEditing) {
    // VIEW MODE
    return (
      <button onClick={() => setIsEditing(true)} className="cursor-pointer border rounded px-2 py-1 w-full text-left">
        {displayString}
      </button>
    )
  }

  // EDIT MODE
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border rounded p-3 shadow-sm w-full max-w-sm flex flex-col gap-3"
    >
      <div className="flex flex-col">
        <label className="text-sm font-medium">Специальность</label>
        <input
          className={`
            mt-1 border rounded px-2 py-1 w-full
            ${errors.specialty ? 'border-red-500' : 'border-gray-300'}
            ${!errors.specialty && watch('specialty') ? 'focus:border-green-500' : ''}
          `}
          type="text"
          {...register('specialty', {
            required: 'Специальность не может быть пустой',
            validate: (val) => {
              const trimmed = val.trim()
              if (trimmed === '') {
                return 'Специальность не может быть пустой'
              }
              if (trimmed.length < 2) {
                return 'Минимум 2 символа'
              }
              return true
            },
          })}
          onBlur={() => trigger('specialty')}
        />
        {errors.specialty && <p className="text-red-500 text-sm mt-1">{errors.specialty.message}</p>}
      </div>

      {/* Graduation (9/11) */}
      <div className="flex flex-col">
        <label className="text-sm font-medium">Выпускники (9/11)</label>
        <input
          className={`
            mt-1 border rounded px-2 py-1 w-full
            ${errors.graduation ? 'border-red-500' : 'border-gray-300'}
            ${!errors.graduation && watch('graduation') ? 'focus:border-green-500' : ''}
          `}
          type="text"
          {...register('graduation', {
            required: 'Обязательно укажите выпуск (9 или 11)',
            validate: (val) => (val === '9' || val === '11' ? true : 'Выпускной класс должен быть либо 9, либо 11'),
          })}
          onBlur={() => trigger('graduation')}
        />
        {errors.graduation && <p className="text-red-500 text-sm mt-1">{errors.graduation.message}</p>}
      </div>

      {/* Group number */}
      <div className="flex flex-col">
        <label className="text-sm font-medium">Номер группы</label>
        <input
          className={`
            mt-1 border rounded px-2 py-1 w-full
            ${errors.groupsNum ? 'border-red-500' : 'border-gray-300'}
            ${!errors.groupsNum && watch('groupsNum') ? 'focus:border-green-500' : ''}
          `}
          type="number"
          {...register('groupsNum', {
            required: 'Номер группы обязателен',
            pattern: {
              value: /^\d+$/,
              message: 'Номер группы должен содержать только цифры',
            },
            validate: (val) => {
              if (Number(val) > 999) {
                return 'Номер группы не может быть больше 999 (пример)'
              }
              return true
            },
          })}
          onBlur={() => trigger('groupsNum')}
        />
        {errors.groupsNum && <p className="text-red-500 text-sm mt-1">{errors.groupsNum.message}</p>}
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={!isValid}
          className={`
            px-3 py-1 rounded
            text-white
            ${isValid ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'}
          `}
        >
          Сохранить
        </button>
        <button type="button" onClick={handleCancel} className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded">
          Отмена
        </button>
      </div>
    </form>
  )
}
