import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  test('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByText('Mayoral Assignment Test');

    expect(heading).toBeInTheDocument();
  });
});
