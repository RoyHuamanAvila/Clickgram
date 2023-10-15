import { cleanup, render, screen } from '@testing-library/react';
import AccountWidget from './AccountWidget';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import * as hooks from '../../hooks';

describe('AccountWidget', () => {
  const user = {
    username: 'Furio',
    fullname: 'Roy Andres',
    picture: 'https://test.com/image.jpg'
  }

  afterEach(cleanup)

  beforeEach(() => {
    const spy = vi.spyOn(hooks, 'useAppSelector');
    spy.mockReturnValue(user);
  })

  it('should render user information', () => {
    render(
      <AccountWidget />, { wrapper: BrowserRouter }
    );

    expect(screen.getByTestId('username')).toHaveTextContent(user.username);
    expect(screen.getByText(user.fullname)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', user.picture);
  });

  it('should render a "Cambiar" button', () => {
    render(
      <AccountWidget />, { wrapper: BrowserRouter }
    );

    expect(screen.getByRole('button', { name: 'Cambiar' })).toBeInTheDocument();
  });
});
