import { IProduct } from '@/types/IProduct';
import API_RESPONSE from '@/api/data/products.json';

export const getProductsHandler = async (): Promise<IProduct[]> => {
  const data = API_RESPONSE;
  return data.products;
};
