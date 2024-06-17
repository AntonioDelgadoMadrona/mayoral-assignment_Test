import { IProduct } from '@/types/product';
import API_RESPONSE from '@/data/products.json';

export const getProductsHandler = async (): Promise<IProduct[]> => {
  const data = API_RESPONSE;
  return data.products;
};
