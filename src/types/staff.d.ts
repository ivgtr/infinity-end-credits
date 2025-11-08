import type { Role } from "./role";
import type { EasterEggType } from "./credits";

export type Staff = {
  role: Role;
  members: string[];
  easterEgg?: EasterEggType;
};

export type Staffs = Staff[];
