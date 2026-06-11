export class HttpError extends Error {
  constructor(
    public response: Response,
    public status: number,
    message?: string,
  ) {
    super(message || `HTTP Error: ${status} ${response.statusText}`);
    this.name = "HttpError";
  }
}

interface CustomRequestInit extends RequestInit {
  params?: Record<string, string | number | boolean>;
}

class ApiClient {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;

  constructor(baseUrl: string = "", defaultHeaders: HeadersInit = {}) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...defaultHeaders,
    };
  }

  private async request<T>(endpoint: string, options: CustomRequestInit = {}): Promise<T> {
    const { params, headers, body, ...customConfig } = options;

    let url = `${this.baseUrl}${endpoint}`;
    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, val]) => searchParams.append(key, String(val)));
      url += `?${searchParams.toString()}`;
    }

    const config: RequestInit = {
      method: customConfig.method || "GET",
      headers: { ...this.defaultHeaders, ...headers },
      ...customConfig,
    };

    if (body && typeof body === "object" && !(body instanceof FormData)) {
      config.body = JSON.stringify(body);
    } else if (body) {
      config.body = body as BodyInit;
    }

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new HttpError(response, response.status);
    }

    if (response.status === 204) {
      return {} as T;
    }

    try {
      return (await response.json()) as T;
    } catch {
      throw new HttpError(
        response,
        response.status,
        `Invalid JSON response: ${response.status} ${response.statusText}`,
      );
    }
  }

  public get<T>(endpoint: string, options?: Omit<CustomRequestInit, "body" | "method">) {
    return this.request<T>(endpoint, { ...options, method: "GET" });
  }

  public post<T>(
    endpoint: string,
    body?: unknown,
    options?: Omit<CustomRequestInit, "body" | "method">,
  ) {
    return this.request<T>(endpoint, { ...options, method: "POST", body });
  }

  public put<T>(
    endpoint: string,
    body?: unknown,
    options?: Omit<CustomRequestInit, "body" | "method">,
  ) {
    return this.request<T>(endpoint, { ...options, method: "PUT", body });
  }

  public delete<T>(endpoint: string, options?: Omit<CustomRequestInit, "body" | "method">) {
    return this.request<T>(endpoint, { ...options, method: "DELETE" });
  }
}
export const api = new ApiClient(process.env.NEXT_PUBLIC_API_URL);
