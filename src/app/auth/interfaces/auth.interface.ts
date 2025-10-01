import { User } from "@socialex/users/interfaces/user.interface";

export interface AuthUser extends User {
  email: string;
  password: string;
}