import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import ProductList from '@/components/ProductList';
import { getProductsHandler } from '@/api/services/productService';

jest.mock('@/api/services/productService', () => ({
  getProductsHandler: jest.fn(),
}));

const mockProducts = [
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
];

describe('ProductList', () => {
  beforeEach(() => {
    getProductsHandler.mockResolvedValue(mockProducts);
  });

  test('renders the product list correctly', async () => {
    render(<ProductList />);

    await waitFor(() => expect(getProductsHandler).toHaveBeenCalled());

    // Checks if filters render
    expect(screen.getByTestId('search-component')).toBeInTheDocument();
    expect(screen.getByTestId('sort-component')).toBeInTheDocument();

    // Checks how many Products title exist
    const productElements = screen.getAllByRole('heading', { level: 3 });
    expect(productElements).toHaveLength(2);
    expect(screen.getByText('Camiseta Básica')).toBeInTheDocument();
    expect(screen.getByText('Pantalones Vaqueros')).toBeInTheDocument();
  });

  test('filters products based on search query', async () => {
    render(<ProductList />);

    await waitFor(() => expect(getProductsHandler).toHaveBeenCalled());

    const searchInput = screen.getByPlaceholderText('Busca productos por nombre...');
    fireEvent.change(searchInput, { target: { value: 'Camiseta' } });

    const productElements = screen.getAllByRole('heading', { level: 3 });

    expect(productElements).toHaveLength(1);
    expect(screen.getByText('Camiseta Básica')).toBeInTheDocument();
    expect(screen.queryByText('Pantalones Vaqueros')).not.toBeInTheDocument();
  });

  test('sorts products by price in ascending order', async () => {
    render(<ProductList />);

    await waitFor(() => expect(getProductsHandler).toHaveBeenCalled());

    const selectElement = screen.getByLabelText('Ordenar:');
    fireEvent.change(selectElement, { target: { value: 'asc' } });

    const productElements = screen.getAllByRole('heading', { level: 3 });
    expect(productElements[0]).toHaveTextContent('Camiseta Básica');
    expect(productElements[1]).toHaveTextContent('Pantalones Vaqueros');
  });

  test('sorts products by price in descending order', async () => {
    render(<ProductList />);

    await waitFor(() => expect(getProductsHandler).toHaveBeenCalled());

    const selectElement = screen.getByLabelText('Ordenar:');
    fireEvent.change(selectElement, { target: { value: 'desc' } });

    const productElements = screen.getAllByRole('heading', { level: 3 });
    expect(productElements[0]).toHaveTextContent('Pantalones Vaqueros');
    expect(productElements[1]).toHaveTextContent('Camiseta Básica');
  });
});
