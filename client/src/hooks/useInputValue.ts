import { useState } from 'react'

export const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (e: { target: HTMLInputElement }) => setValue(e.target.value)

  return { value, onChange }
}