import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { getToken } from '../utils/storage'
import env from '../constants/env'

interface DefaultHeaders {
  'Accept-Language': string
  'Content-Type': string
  Accept: string
  Authorization?: string
}

export default class API {
  private apiProvider: AxiosInstance
  private baseUrl: string

  constructor() {
    this.baseUrl = env.apiUrl

    this.apiProvider = axios.create({
      baseURL: this.baseUrl,
      timeout: 300000,
      withCredentials: true,
    })
  }

  private static errorHandler(error: any): void {
    // Error handling.
    console.log('Error', error)
    throw error
  }

  private static async getDefaultHeaders(): Promise<DefaultHeaders> {
    const headers: DefaultHeaders = {
      'Accept-Language': 'en_US',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    const token = await getToken()

    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    return headers
  }

  private static async getHeaders(headers: any = {}): Promise<any> {
    const defaultHeaders = await API.getDefaultHeaders()
    return { ...defaultHeaders, ...headers }
  }

  public async post(
    url: string,
    body: any,
    headers: any = {},
    baseUrl: string = this.baseUrl
  ): Promise<AxiosResponse | undefined> {
    const requestHeaders = await API.getHeaders(headers)
    try {
      return await this.apiProvider.post(`${baseUrl}/${url}`, body, {
        headers: requestHeaders,
      })
    } catch (error) {
      API.errorHandler(error)
    }
  }

  public async get(
    url: string,
    params: any = {},
    headers: any = {},
    otherOptions: any = {}
  ): Promise<AxiosResponse | undefined> {
    const requestHeaders = await API.getHeaders(headers)
    try {
      return await this.apiProvider.get(url, {
        params,
        headers: requestHeaders,
        ...otherOptions,
      })
    } catch (error) {
      API.errorHandler(error)
    }
  }

  public async delete(url: string, headers: any = {}): Promise<AxiosResponse | undefined> {
    const requestHeaders = await API.getHeaders(headers)
    try {
      return await this.apiProvider.delete(url, {
        headers: requestHeaders,
      })
    } catch (error) {
      API.errorHandler(error)
    }
  }

  public async put(url: string, body: any, headers: any = {}): Promise<AxiosResponse | undefined> {
    const requestHeaders = await API.getHeaders(headers)
    try {
      return await this.apiProvider.put(url, body, {
        headers: requestHeaders,
      })
    } catch (error) {
      API.errorHandler(error)
    }
  }

  public async patch(url: string, body: any, headers: any = {}): Promise<AxiosResponse | undefined> {
    const requestHeaders = await API.getHeaders(headers)
    try {
      return await this.apiProvider.patch(url, body, {
        headers: requestHeaders,
      })
    } catch (error) {
      API.errorHandler(error)
    }
  }
}
