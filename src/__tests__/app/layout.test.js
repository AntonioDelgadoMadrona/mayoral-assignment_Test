/* eslint-disable react/display-name */
import React from 'react';
import { render, screen } from '@testing-library/react';
import RootLayout from '@/app/layout';

jest.mock('@/components/Header', () => () => <div>Mocked Header</div>);
jest.mock('@/components/Footer', () => () => <div>Mocked Footer</div>);

describe('Layout Component', () => {
  test('renders without crashing', () => {
    render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>,
    );

    expect(screen.getByText('Mocked Header')).toBeInTheDocument();
    expect(screen.getByText('Mocked Footer')).toBeInTheDocument();
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  test('sets the correct language on the html tag', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>,
    );

    const htmlElement = container.querySelector('html');

    expect(htmlElement).toBeInTheDocument();
    expect(htmlElement).toHaveAttribute('lang', 'es');
  });
});
