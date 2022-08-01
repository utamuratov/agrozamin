export interface CreateUser {
  login: string;
  phone: number;
  f_name: string;
  l_name: string;
  description: string | null;
}

export interface User extends CreateUser {  
  role?: Role | null;
  id: number;
  blocked: boolean;
  created_at: Date;
  created_by: string | null;
  last_active_time: Date | null;
  moderator: Moderator | null;
  s_name: string | null;
  status: number;
  //
  edit: boolean;
}

export interface Moderator {
  full_name: string;
  id: number;
  laravel_through_key: number;
}

export interface BlockUser {
  id: number;
  blocked: boolean;
}

export interface DataResponse {
  current_page: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
  data: User[];
}

export interface UserResponse {
  success: boolean;
  data: DataResponse;
}

export interface AttachModerator {
  moderator_id: number;
  users: number[];
}

export interface Role {
  id: number,
  description: string
}
