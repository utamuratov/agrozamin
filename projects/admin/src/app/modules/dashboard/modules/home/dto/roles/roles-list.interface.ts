import { Id } from "ngx-az-core";
import { Access } from "./list-access.interface";

export interface RolesList extends Id {
  access: Access[];
  description: string;
  key: string;
}
