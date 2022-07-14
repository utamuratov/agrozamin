import { Id } from "ngx-az-core";
import { AccessControl } from "./access-control.interface";
import { Translate } from "../translate.interface";

export interface Role extends Id {
    access_controls: AccessControl[];
    description: Translate;
    key: string;
}