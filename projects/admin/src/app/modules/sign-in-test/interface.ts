export interface User {
  login: string;
  password: string;
  client_id: string;
  client_secret: string;
}

export interface AuthResponse {
  success: boolean;
  data: UserResponse;
}

export interface UserResponse {
  access_token: string;
  expires_in: number;
  f_name: string;
  l_name: string;
  photo: string;
  refresh_token: string;
  role: string;
  token_type: string;
}

export interface RefreshTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}

export interface RefreshTokenRequest {
  refresh_token: string | null;
  client_id: string;
  client_secret: string;
}
