import { render, screen } from '@testing-library/react';
import App from './App';

test('render item-list link', () => {
    render(<App />);
    expect(screen.getByTestId('itemListLink')).toBeInTheDocument();
  });

test('render item-upload link', () => {
    render(<App />);
    expect(screen.getByTestId('itemUploadLink')).toBeInTheDocument();
  });

  test('render item-request link', () => {
    render(<App />);
    expect(screen.getByTestId('itemRequestLink')).toBeInTheDocument();
  });