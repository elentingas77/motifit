import { STORAGE_TOKEN_KEY_NAME } from '../constants/index'
import jwt_decode from "jwt-decode";

export const getToken = async (): Promise<string | null> => {
  return localStorage.getItem(STORAGE_TOKEN_KEY_NAME)
}

export const removeToken = async (): Promise<void> => {
  localStorage.removeItem(STORAGE_TOKEN_KEY_NAME)
}

export const setToken = async (token: string): Promise<void> => {
  localStorage.setItem(STORAGE_TOKEN_KEY_NAME, token)
}

export const getRole = async (): Promise<string | null> => {
  let token = await getToken();
  let role = ''
  if (token) {
    let decoded: { roles: string } = jwt_decode(token);
    role = decoded?.roles
  }
  return role
}
