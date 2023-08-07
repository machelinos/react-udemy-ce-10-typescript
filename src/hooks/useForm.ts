import { ChangeEvent, useState } from 'react'

export function useForm<T>(initialState: T) {
  const [form, setForm] = useState(initialState)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  return {
    form,
    ...form,
    handleInputChange,
  }
}
