import api from "./axios";

export type PropertyCategory = "SALE" | "RENT" | "LEASE";

export interface Property {
  id: string | number;
  title: string;
  description: string;
  price: number;
  location: string;
  status?: "ACTIVE" | "INACTIVE";
  types?: string[]; // Maps to PropertyType enum
  features?: string[]; // Maps to PropertyFeature enum
  images?: string[];
  videos?: string[];
  category?: PropertyCategory;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetPropertiesParams {
  status?: string;
  search?: string;
  category?: string;
  type?: string;
}

export const getAllProperties = async (params: GetPropertiesParams = {}) => {
  return api.get<Property[]>("/properties", { params });
};

export const getPropertyDetails = async (id: string | number) => {
  return api.get<Property>(`/properties/${id}`);
};

export const togglePropertyFavourite = async (id: string | number) => {
  return api.post(`/properties/${id}/favourite`);
};
