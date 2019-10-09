import { User } from '@Models/User'

export const getUser = (): User => {
  const user: User = {
    displayName: 'Charles',
    email: 'example@domain.com'
  }

  return user
}

