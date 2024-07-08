export interface AuthApi {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  success?: boolean
  updated: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
}

export interface LoginArgt {
  email: string
  password: string
  rememberMe?: boolean
}

export interface SignUpType {
  email: string
  password: string
}

export interface SingUpResponseType {
  avatar: string
  created: string
  email: string
  id: number
  isEmailVerified: boolean
  name: string
  updated: string
}
