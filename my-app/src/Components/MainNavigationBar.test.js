import { render, screen } from '@testing-library/react';
import MainNavigationBar from './MainNavigationBar';

test('render cwrusale logo', () => {
    render(<MainNavigationBar />);
    expect(screen.getByTestId('NavBarLogo')).toBeInTheDocument();
  });

  test('list contains 3 elements/links', () => {
    render(<MainNavigationBar />);
  
    const listElement = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
  
    expect(listElement).toBeInTheDocument();
    expect(listItems.length).toEqual(2);
  });