// src/utils/request.ts
import axios, {type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig} from 'axios'

// 定义响应数据格式（根据后端约定调整）
interface ResponseData<T = any> {
    code: number
    data: T
    message: string
}

// 扩展AxiosRequestConfig接口
declare module 'axios' {
    interface AxiosRequestConfig {
        // 是否显示全局loading（根据需求可选）
        showLoading?: boolean
        // 是否直接返回原始响应（跳过响应拦截器处理）
        returnRawResponse?: boolean
    }
}

class Request {
    private instance: AxiosInstance
    private readonly options: AxiosRequestConfig

    constructor(options: AxiosRequestConfig = {}) {
        this.options = options
        this.instance = axios.create(this.baseConfig)

        // 注册拦截器
        this.setupInterceptors()
    }

    // 基础配置
    private get baseConfig(): AxiosRequestConfig {
        return {
            baseURL: "localhost:8080",
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            ...this.options
        }
    }

    // 设置拦截器
    private setupInterceptors() {
        // 请求拦截器
        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // 添加认证token（示例）
                const token = localStorage.getItem('token')
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`
                }

                // 全局loading控制（示例）
                if (config.showLoading) {
                    // 这里可以调用全局loading显示方法
                }

                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )

        // 响应拦截器
        this.instance.interceptors.response.use(
            (response: AxiosResponse<ResponseData>) => {
                // 关闭loading
                if (response.config.showLoading) {
                    // 调用全局loading隐藏方法
                }

                // 直接返回原始响应
                if (response.config.returnRawResponse) {
                    return response
                }

                const {code, data, message} = response.data

                // 根据业务状态码处理（示例）
                if (code === 200) {
                    return data
                } else {
                    // 处理业务错误
                    this.handleBusinessError(code, message)
                    return Promise.reject(new Error(message))
                }
            },
            (error) => {
                // 关闭loading
                if (error.config?.showLoading) {
                    // 调用全局loading隐藏方法
                }

                // 处理HTTP错误
                this.handleHttpError(error)
                return Promise.reject(error)
            }
        )
    }

    // 处理业务错误（示例）
    private handleBusinessError(code: number, message: string) {
        switch (code) {
            case 401:
                // 跳转到登录页
                window.location.href = '/login'
                break
            case 403:
                alert('权限不足')
                break
            default:
                console.error(`[业务错误] Code: ${code}, Message: ${message}`)
        }
    }

    // 处理HTTP错误（示例）
    private handleHttpError(error: any) {
        if (error.response) {
            const {status} = error.response
            switch (status) {
                case 400:
                    console.error('请求参数错误')
                    break
                case 404:
                    console.error('资源未找到')
                    break
                case 500:
                    console.error('服务器错误')
                    break
                default:
                    console.error(`网络错误: ${status}`)
            }
        } else if (error.request) {
            console.error('请求未响应')
        } else {
            console.error('请求配置错误', error.message)
        }
    }

    // 通用请求方法
    public request<T = any>(config: AxiosRequestConfig): Promise<T> {
        return this.instance.request(config)
    }

    // GET请求
    public get<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get(url, {params, ...config})
    }

    // POST请求
    public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.post(url, data, config)
    }

    // PUT请求
    public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.put(url, data, config)
    }

    // DELETE请求
    public delete<T = any>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.delete(url, {params, ...config})
    }

    // 文件上传（示例）
    public upload<T = any>(url: string, file: File, config?: AxiosRequestConfig): Promise<T> {
        const formData = new FormData()
        formData.append('file', file)
        return this.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            ...config
        })
    }
}

// 创建请求实例
const request = new Request({
    // 可在此添加实例级别配置
})

export default request