import { getProductsHandler } from '@/api/services/productService';
import API_RESPONSE from '@/api/data/products.json';

jest.mock('@/api/data/products.json', () => ({
  products: [
    {
      id: '1',
      name: 'Camiseta Básica',
      price: 14.99,
      discount: 5,
      colors: ['blanco', 'negro', 'gris'],
      description: 'Camiseta de algodón básica, perfecta para el día a día.',
      imageUrl: 'camiseta.avif',
    },
    {
      id: '2',
      name: 'Pantalones Vaqueros',
      price: 39.99,
      discount: 10,
      colors: ['azul', 'negro'],
      description: 'Pantalones vaqueros de corte clásico y cómodo.',
      imageUrl: 'pantalon.avif',
    },
  ],
}));

describe('getProductsHandler', () => {
  test('should return products from JSON', async () => {
    const products = await getProductsHandler();
    expect(products).toEqual(API_RESPONSE.products);
    expect(products).toHaveLength(2);
  });
});
