import { ErrorItem } from "./error-item.interface";

export interface ErrorMessage {
    success: boolean;
    errors: ErrorItem[]; 
}