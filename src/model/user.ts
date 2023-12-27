import { Roles } from "../model/roles"

export interface User {
    id?: number;
    name: string;
    username: string;
    Roles : string[];
    password?: string;
    token?: string;
}
  