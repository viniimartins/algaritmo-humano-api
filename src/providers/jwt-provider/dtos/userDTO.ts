import type { UserRole } from "@modules/users/constants";

class UserDTO {
  userId: string;
  email: string;
  role: UserRole
}

export { UserDTO }