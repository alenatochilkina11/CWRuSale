import { render, screen } from '@testing-library/react';
import ItemUploadForm from './ItemUploadForm';

test('render upload form title', () => {
    render(<ItemUploadForm />);
    expect(screen.getByTestId('uploadTitle')).toBeInTheDocument();
  });

  test('render upload form image', () => {
    render(<ItemUploadForm />);
    expect(screen.getByTestId('uploadImage')).toBeInTheDocument();
  });

  test('render upload form description', () => {
    render(<ItemUploadForm />);
    expect(screen.getByTestId('uploadDescription')).toBeInTheDocument();
  });

  test('render upload form proce', () => {
    render(<ItemUploadForm />);
    expect(screen.getByTestId('uploadPrice')).toBeInTheDocument();
  });

  test('render upload form category', () => {
    render(<ItemUploadForm />);
    expect(screen.getByTestId('uploadCategory')).toBeInTheDocument();
  });

  test('render upload form seller name', () => {
    render(<ItemUploadForm />);
    expect(screen.getByTestId('uploadSellerName')).toBeInTheDocument();
  });

  test('render upload form seller email', () => {
    render(<ItemUploadForm />);
    expect(screen.getByTestId('uploadSellerEmail')).toBeInTheDocument();
  });

  test('render upload form seller phone', () => {
    render(<ItemUploadForm />);
    expect(screen.getByTestId('uploadSellerPhone')).toBeInTheDocument();
  });