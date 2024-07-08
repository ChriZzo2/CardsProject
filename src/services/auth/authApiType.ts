export interface authApi {
  avatar: string
  id: number
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
}

export interface LoginArgt {
  password: string
  email: string
  rememberMe: boolean
}

export interface SignUpType {
  password: string
  email: string
}

export interface SingUpResponseType {
  avatar: string
  id: number
  email: string
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}
