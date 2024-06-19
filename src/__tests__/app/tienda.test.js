/* eslint-disable react/display-name */
import React from 'react';
import { render, screen } from '@testing-library/react';
import TiendaPage, { metadata } from '@/app/tienda/page';

jest.mock('@/components/ProductList', () => () => (
  <div data-testid="product-list-component">Mocked ProductList</div>
));

describe('TiendaPage', () => {
  test('renders TiendaPage component', () => {
    render(<TiendaPage />);

    const pageTitle = screen.getByRole('heading', { name: /tienda - mayoral/i });
    expect(pageTitle).toBeInTheDocument();

    const productList = screen.getByTestId('product-list-component');
    expect(productList).toBeInTheDocument();
  });

  test('Metadata const should have correct properties', () => {
    expect(metadata.title).toBe('Tienda - Mayoral');
    expect(metadata.description).toBe('Bienvenid@ a la Tienda');
  });
});
