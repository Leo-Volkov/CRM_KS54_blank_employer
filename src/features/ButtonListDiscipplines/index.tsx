import { ModalWrapper } from '@/shared/ui/ModalWrapper'
import { useState } from 'react'

export const ListDiscipplines = () => {
  const [isOpen, setIsOpen] = useState(false)

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
        <div className="flex flex-col gap-2">2000</div>
      </ModalWrapper>
    </>
  )
}
