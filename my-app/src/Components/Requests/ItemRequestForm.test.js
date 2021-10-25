import { render, screen } from '@testing-library/react';
import ItemRequestForm from './ItemRequestForm';

test('render request form card', () => {
    render(<ItemRequestForm />);
    screen.debug();
    expect(screen.getByTestId('requestCard')).toBeInTheDocument();
  });

  test('render request form category', () => {
      render(<ItemRequestForm />);
      expect(screen.getByTestId('requestCategory')).toBeInTheDocument();
  })

  test('render request form buyer name', () => {
    render(<ItemRequestForm />);
    expect(screen.getByTestId('requestBuyerName')).toBeInTheDocument();
})

test('render request form buyer email', () => {
    render(<ItemRequestForm />);
    expect(screen.getByTestId('requestBuyerEmail')).toBeInTheDocument();
})

test('render request form buyer phone', () => {
    render(<ItemRequestForm />);
    expect(screen.getByTestId('requestBuyerPhone')).toBeInTheDocument();
})
