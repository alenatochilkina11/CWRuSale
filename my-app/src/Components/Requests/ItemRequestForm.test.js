import { render, screen } from '@testing-library/react';
import ItemRequestForm from './ItemRequestForm';

test('render request form', () => {
    render(<ItemRequestForm />);
  
    screen.debug();
  
    expect(screen.getByTestId('requestCard')).toBeInTheDocument();
  });