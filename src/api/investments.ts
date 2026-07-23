import api from "./axios";

// Interface representing the Investment Package from NestJS
export interface InvestmentPackage {
  id: string;
  name: string;
  description: string;
  roi: number;
  durationMonths: number;
  minAmount: number;
  maxAmount: number;
  location?: string;
  category: "REAL_ESTATE" | "AGRICULTURE" | string;
  status: "ACTIVE" | "INACTIVE";
  images: string[];
  videos: string[];
  isFavourite?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// Params interface for query filters
export interface GetInvestmentsParams {
  search?: string;
  location?: string;
  category?: string;
}

// Payload interface for subscribing
export interface SubscribePayload {
  amount: number;
}

// Response interface for toggling favorites
export interface FavouriteResponse {
  message: string;
  isFavourite: boolean;
}

/**
 * GET /investments
 * List available packages with dynamic filters (search, location, category)
 */
export const getAllInvestments = async (params: GetInvestmentsParams = {}) => {
  return api.get<InvestmentPackage[]>("/investments", { params });
};

/**
 * POST /investments
 * [Agent Only] Create package (ROI, Duration, Min/Max)
 */
export const createInvestment = async (formData: FormData) => {
  return api.post<InvestmentPackage>("/investments", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

/**
 * GET /investments/{id}
 * Details of an investment package
 */
export const getInvestmentDetails = async (id: string) => {
  return api.get<InvestmentPackage>(`/investments/${id}`);
};

/**
 * PATCH /investments/{id}
 * [Agent Only] Update package
 */
export const updateInvestment = async (id: string, formData: FormData) => {
  return api.patch<InvestmentPackage>(`/investments/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

/**
 * POST /investments/{id}/subscribe
 * [User Only] Purchase an investment
 */
export const subscribeToInvestment = async (
  id: string,
  data: SubscribePayload,
) => {
  return api.post<{ message: string; subscription: any }>(
    `/investments/${id}/subscribe`,
    data,
  );
};

/**
 * POST /investments/{id}/favourite
 * [User Only] Toggle an investment inside the user's saved list.
 */
export const toggleInvestmentFavourite = async (id: string) => {
  return api.post<FavouriteResponse>(`/investments/${id}/favourite`);
};
