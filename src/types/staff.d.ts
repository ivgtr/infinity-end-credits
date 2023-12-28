import type { Role } from "./role";

export type Staff = {
  role: Role;
  members: string[];
};

export type Staffs = Staff[];
