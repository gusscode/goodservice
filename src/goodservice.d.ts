interface ApiHeaders {
  [key: string]: string;
}

declare module "goodservice" {
  export class GoodService {
    //options: Options;
    /**
     * @param message (string)
     */
    getHeaders: (isFormadata: boolean) => Object;
    GET: <T>(
      endpoint: string,
      body?: object | FormData,
      customHeaders?: ApiHeaders,
      isFormadata?: boolean
    ) => Promise<{ status: number; data: T }>;
    POST: <T>(
      endpoint: string,
      body?: object | FormData,
      customHeaders?: ApiHeaders,
      isFormadata?: boolean
    ) => Promise<{ status: number; data: T }>;
    PUT: <T>(
      endpoint: string,
      body?: object | FormData,
      customHeaders?: ApiHeaders,
      isFormadata?: boolean
    ) => Promise<{ status: number; data: T }>;
    DELETE: <T>(
      endpoint: string,
      body?: object | FormData,
      customHeaders?: ApiHeaders,
      isFormadata?: boolean
    ) => Promise<{ status: number; data: T }>;
  }
  export const goodService: GoodService;
}
