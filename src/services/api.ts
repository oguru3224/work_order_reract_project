import api from '../config/api';

// Types for API responses
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

export interface OrderData {
  paperTypeId: number;
  academiclevel: number;
  deadline: string;
  pagesreq: number;
  topcatId: number;
  toptitle: string;
  instructions: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  chartsreq: number;
  slidesreq: number;
  spacing: string;
}

export interface ContactData {
  name: string;
  email: string;
  topcatId: string;
  message: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  published_at: string;
  image_url?: string;
}

// Order API
export const orderApi = {
  create: async (orderData: OrderData): Promise<ApiResponse<{ order_id: string }>> => {
    const response = await api.post('/v1/orders', orderData);
    return response.data;
  },
  
  getById: async (orderId: string): Promise<ApiResponse<OrderData>> => {
    const response = await api.get(`/orders/${orderId}`);
    return response.data;
  },
  
  getStatus: async (orderId: string): Promise<ApiResponse<{ status: string }>> => {
    const response = await api.get(`/orders/${orderId}/status`);
    return response.data;
  }
};

// Contact API
export const contactApi = {
  submit: async (contactData: ContactData): Promise<ApiResponse> => {
    const response = await api.post('/contact', contactData);
    return response.data;
  }
};

// Blog API
export const blogApi = {
  getAll: async (): Promise<ApiResponse<BlogPost[]>> => {
    const response = await api.get('/blog');
    return response.data;
  },
  
  getById: async (id: number): Promise<ApiResponse<BlogPost>> => {
    const response = await api.get(`/blog/${id}`);
    return response.data;
  }
};

// Services API
export const servicesApi = {
  getAll: async (): Promise<ApiResponse<any[]>> => {
    const response = await api.get('/services');
    return response.data;
  },
  
  getPricing: async (): Promise<ApiResponse<any[]>> => {
    const response = await api.get('/pricing');
    return response.data;
  }
};

// Writers API
export const writersApi = {
  getAll: async (): Promise<ApiResponse<any[]>> => {
    const response = await api.get('/writers');
    return response.data;
  }
};

// Reviews API
export const reviewsApi = {
  getAll: async (): Promise<ApiResponse<any[]>> => {
    const response = await api.get('/reviews');
    return response.data;
  },
  
  submit: async (reviewData: any): Promise<ApiResponse> => {
    const response = await api.post('/reviews', reviewData);
    return response.data;
  }
};

// Config API
export interface ServiceType {
  id: number;
  title: string;
}

export interface AcademicLevelType {
  id: number;
  title:string;
  short_title:string;
  degree:string;
}

export interface ConfigData {
  orderServiceTypes: ServiceType[];
  disciplines: any[];
  academicLevels: any[];
  paperTypes: any[];
  // Add other config properties as needed
}

export const configApi = {
  getConfig: async (): Promise<ApiResponse<ConfigData>> => {
    const response = await api.get('/v1/config');
    return response.data;
  }
};
