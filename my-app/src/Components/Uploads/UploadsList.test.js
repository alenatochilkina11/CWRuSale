import { render, screen } from '@testing-library/react';
import UploadsList from './UploadsList'

test('list contains 6 elements', () => {
    render(<UploadsList />);
  
    const listElement = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
  
    expect(listElement).toBeInTheDocument();
    expect(listItems.length).toEqual(6);
  });