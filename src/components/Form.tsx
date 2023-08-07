import { useForm } from '../hooks/useForm'

const initialState: FormData = {
  name: '',
  email: '',
}

interface FormData {
  name: string
  email: string
}

export const Form = () => {
  const { form, handleInputChange, name, email } =
    useForm<FormData>(initialState)

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </form>

      <p>{JSON.stringify(form)}</p>
    </>
  )
}
