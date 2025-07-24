import type { UserRole } from "@modules/users/constants"

interface UserJWTDTO {
  sub: string
  email: string
  role: UserRole
}

export { UserJWTDTO }