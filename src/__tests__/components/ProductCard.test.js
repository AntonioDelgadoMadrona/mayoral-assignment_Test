import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/ProductCard';

const mockProduct = {
  id: '1',
  name: 'Camiseta',
  price: 19.99,
  discount: 10,
  colors: ['rojo', 'azul'],
  description: 'Camiseta de algodón',
  imageUrl: 'camiseta.jpg',
};

describe('ProductCard', () => {
  test('renders product name', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText('Camiseta')).toBeInTheDocument();
    expect(screen.getByText('19.99€')).toBeInTheDocument();
    expect(screen.getByText('17.99€ (-10%)')).toBeInTheDocument();

    const imgElement = screen.getByAltText('Camiseta');
    expect(imgElement).toHaveAttribute('src', `${window.origin}/images/camiseta.jpg`);

    expect(screen.getByText('Más colores')).toBeInTheDocument();
    expect(screen.getByText('AÑADIR')).toBeInTheDocument();
  });

  test('does not render discounted price if discount is 0', () => {
    const productWithoutDiscount = { ...mockProduct, discount: 0 };
    render(<ProductCard product={productWithoutDiscount} />);
    expect(screen.queryByText('(-10%)')).not.toBeInTheDocument();
  });

  test('shows alert when "Añadir" button is clicked', () => {
    window.alert = jest.fn();
    render(<ProductCard product={mockProduct} />);
    const button = screen.getByText('AÑADIR');
    button.click();
    expect(window.alert).toHaveBeenCalledWith('Añadido al carrito');
  });
});
