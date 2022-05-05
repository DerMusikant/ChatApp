import { useState } from 'react'

export const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState<any>(initialValue)
  const onChange = (e: { target: HTMLInputElement }) => setValue(e.target.value)

  return { value, onChange }
}