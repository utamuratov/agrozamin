import { ProjectList } from "./project-list.interface";

export interface ProjectListResponse {
    success: boolean;
    data: ProjectList[]
}