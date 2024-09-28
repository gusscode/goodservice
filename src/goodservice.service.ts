interface ApiHeaders {
    [key: string]: string
}

interface ApiResponse<T> {
    status: number
    data: T
}

export class GoodService {
    private readonly route

    constructor(route: string) {
        this.route = route
    }

    getHeaders(isFormadata: boolean = false): ApiHeaders {
        return {
            ...(isFormadata
                ? {}
                : {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }),
            //'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token') || ''}`
            //tenant: '',
            //token: localStorage.getItem('token') || ''
        }
    }

    // -------------------------------------
    // En estas funciones si no se usa la sobrecarga n°4 se enviarán los datos en con aplication json
    //--------------------------------------
    // Sobrecarga del método GET
    /**
     * Get
     * @param {string} endpoint - ruta
     * ``` ts
     * const response = await apiService.GET('/users')
     * ```
     */
    async GET<T>(endpoint: string): Promise<{ status: number; data: T }>
    async GET<T>(endpoint: string, body: object): Promise<{ status: number; data: T }>
    async GET<T>(
        endpoint: string,
        body: object,
        customHeaders: ApiHeaders
    ): Promise<{ status: number; data: T }>
    async GET<T>(
        endpoint: string,
        body: FormData,
        customHeaders: ApiHeaders,
        isFormadata: boolean
    ): Promise<{ status: number; data: T }>
    async GET<T>(
        endpoint: string,
        body?: object | FormData,
        customHeaders?: ApiHeaders,
        isFormadata?: boolean
    ): Promise<{ status: number; data: T }> {
        const requestInit: RequestInit = {
            method: 'GET',
            headers: { ...this.getHeaders(isFormadata), ...customHeaders },
            ...(isFormadata ? { body: body as FormData } : { body: JSON.stringify(body) })
        }
        try {
            const response = await fetch(this.route + endpoint, requestInit)
            const data: T = await response.json()
            return { status: response.status, data: data }
        } catch (error) {
            console.error('Error en la solicitud GET:', error)
            throw error
        }
    }

    async POST<T>(endpoint: string): Promise<{ status: number; data: T }>
    async POST<T>(endpoint: string, body: object): Promise<{ status: number; data: T }>
    async POST<T>(
        endpoint: string,
        body: object,
        customHeaders: ApiHeaders
    ): Promise<{ status: number; data: T }>
    async POST<T>(
        endpoint: string,
        body: FormData,
        customHeaders: ApiHeaders,
        isFormadata: boolean
    ): Promise<{ status: number; data: T }>
    async POST<T>(
        endpoint: string,
        body?: object | FormData,
        customHeaders?: ApiHeaders,
        isFormadata?: boolean
    ): Promise<{ status: number; data: T }> {
        const requestInit: RequestInit = {
            method: 'POST',
            headers: { ...this.getHeaders(isFormadata), ...customHeaders },
            ...(isFormadata ? { body: body as FormData } : { body: JSON.stringify(body) })
        }
        try {
            const response = await fetch(this.route + endpoint, requestInit)
            const data: T = await response.json()
            return { status: response.status, data: data }
        } catch (error) {
            console.error('Error en la solicitud:', error)
            throw error
        }
    }

    async PUT<T>(endpoint: string): Promise<{ status: number; data: T }>
    async PUT<T>(endpoint: string, body: object): Promise<{ status: number; data: T }>
    async PUT<T>(
        endpoint: string,
        body: object,
        customHeaders: ApiHeaders
    ): Promise<{ status: number; data: T }>
    async PUT<T>(
        endpoint: string,
        body: FormData,
        customHeaders: ApiHeaders,
        isFormadata: boolean
    ): Promise<{ status: number; data: T }>
    async PUT<T>(
        endpoint: string,
        body?: object | FormData,
        customHeaders?: ApiHeaders,
        isFormadata?: boolean
    ): Promise<{ status: number; data: T }> {
        const requestInit: RequestInit = {
            method: 'PUT',
            headers: { ...this.getHeaders(isFormadata), ...customHeaders },
            ...(isFormadata ? { body: body as FormData } : { body: JSON.stringify(body) })
        }
        try {
            const response = await fetch(this.route + endpoint, requestInit)
            const data: T = await response.json()
            return { status: response.status, data: data }
        } catch (error) {
            console.error('Error en la solicitud:', error)
            throw error
        }
    }

    async DELETE<T>(endpoint: string): Promise<{ status: number; data: T }>
    async DELETE<T>(endpoint: string, body: object): Promise<{ status: number; data: T }>
    async DELETE<T>(
        endpoint: string,
        body: object,
        customHeaders: ApiHeaders
    ): Promise<{ status: number; data: T }>
    async DELETE<T>(
        endpoint: string,
        body: FormData,
        customHeaders: ApiHeaders,
        isFormadata: boolean
    ): Promise<{ status: number; data: T }>
    async DELETE<T>(
        endpoint: string,
        body?: object | FormData,
        customHeaders?: ApiHeaders,
        isFormadata?: boolean
    ): Promise<{ status: number; data: T }> {
        const requestInit: RequestInit = {
            method: 'DELETE',
            headers: { ...this.getHeaders(isFormadata), ...customHeaders },
            ...(isFormadata ? { body: body as FormData } : { body: JSON.stringify(body) })
        }
        try {
            const response = await fetch(this.route + endpoint, requestInit)
            const data: T = await response.json()
            return { status: response.status, data: data }
        } catch (error) {
            console.error('Error en la solicitud:', error)
            throw error
        }
    }
}

export const goodService = new GoodService('')
