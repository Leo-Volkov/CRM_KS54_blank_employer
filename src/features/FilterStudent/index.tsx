import { ButtonPush } from '@/shared/ui/ButtonPush'

export function FilterStudent() {
  return (
    <div className="flex gap-4 mb-4">
      <div>
        <label className="block mb-1">Курс</label>
        <input className="border rounded px-2 py-1" type="number" defaultValue={2} />
      </div>
      <div>
        <label className="block mb-1">Группа</label>
        <input className="border rounded px-2 py-1" type="text" defaultValue="ИСП9 - 45" />
      </div>
      <ButtonPush
        type='submit'
        onClick={() => {
          console.log('Найти')
        }}
        className="self-end"
      >
        Найти
      </ButtonPush>
    </div>
  )
}
