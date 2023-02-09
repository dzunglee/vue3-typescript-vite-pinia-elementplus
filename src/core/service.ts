import axios, { type AxiosInstance, type AxiosRequestConfig, type Method } from 'axios'
import env from 'core/env'
import { AUTH_TOKEN } from './constants'

axios.defaults.headers.post['Content-Type'] = 'application/json'

export interface ServiceOptions {
  namespace?: string
  scope?: string
  endpoint?: string
  axios?: AxiosRequestConfig
}

const defaultOptions: ServiceOptions = {
  namespace: undefined,
  endpoint: env.string('VITE_SERVICE_ENDPOINT'),
  axios: {},
}

export default class Service {
  private axios: AxiosInstance
  private headers: any
  private options: ServiceOptions = { ...defaultOptions }
  /**
   * Creates an instance of Service.
   *
   * @memberOf Service
   */
  constructor(options?: ServiceOptions) {
    this.options = { ...defaultOptions, ...options }
    const baseURL = this.options.endpoint || env.string('VITE_SERVICE_ENDPOINT')
    this.axios = axios.create({
      baseURL,
      ...this.options.axios,
    })
  }

  public toQueryString(params: { [key: string]: any } = {}) {
    const keys: string[] = Object.keys(params)
    const segments: any[] = []
    keys.forEach((k) => {
      if (params[k]) {
        segments.push(`${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
      }
    })
    return segments.join('&')
  }

  /**
   * Call a service action via REST API
   *
   * @param {any} action  name of action
   * @param {any} params  parameters to request
   * @returns  {Promise}
   *
   * @memberOf Service
   */
  public async rest(
    action: string,
    params?: any,
    options = {
      headers: {},
      method: 'post',
    },
  ) {
    const { headers } = options
    try {
      const token = localStorage.getItem(AUTH_TOKEN)
      const opts: AxiosRequestConfig = {
        url: action,
        method: options.method as Method,
        data: params,
        headers: {
          ...(this.headers || {}),
          ...headers,
          Authorization: token ? `Bearer ${token}` : '',
        },
      }
      const response = await this.axios.request(opts)
      return response.data
    } catch (err: any) {
      throw err.response
    }
  }

  public postFromData(action: string, data: any) {
    const headers = {
      'Content-Type': 'multipart/form-data',
    }
    return this.rest(action, data, {
      method: 'post',
      headers,
    })
  }

  public get(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options
    const query = this.toQueryString(params)
    const path = query ? `${action}?${query}` : action
    return this.rest(
      path,
      {},
      {
        method: 'get',
        headers,
      },
    )
  }

  public post(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options
    return this.rest(action, params, {
      method: 'post',
      headers,
    })
  }

  public put(action: string, params?: any, options?: any) {
    const { headers = {} } = options || {}
    return this.rest(action, params, {
      method: 'put',
      headers,
    })
  }

  public delete(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options
    const query = this.toQueryString(params)
    const path = query ? `${action}/${query}` : action
    return this.rest(
      path,
      {},
      {
        method: 'delete',
        headers,
      },
    )
  }
}
