import { useState } from 'react'

interface UserInterface {
  name: string
  id: string
}

const tempUser: UserInterface = {
  name: 'Joy',
  id: '123123',
}

export const User = () => {
  const [user, setUser] = useState<UserInterface>(tempUser)

  const handleLogin = (): void => {
    setUser({
      name: 'Marcelle',
      id: '121w',
    })
  }

  return (
    <div className="mt-5">
      <h2>User</h2>

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>

      <pre>{JSON.stringify(user)}</pre>
    </div>
  )
}
