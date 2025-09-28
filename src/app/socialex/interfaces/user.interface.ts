export interface User {
  id: number;
  name: string;
  avatar: string;
  description: string;
  status : "online" | "offline";
  profession: string;
  birthdate: string;
}