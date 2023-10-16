import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import Login from './LoginContainer'
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import * as hooks from '../../hooks';
import { AuthState } from '../../features/application/authSlice';
import { LocationDisplay } from '../../Routes';

describe('Login', () => {

  afterEach(cleanup);

  it('should render location-display', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <LocationDisplay />
        </MemoryRouter>
      </Provider>
    );
    const locationDisplay = screen.getByTestId('location-display');
    expect(locationDisplay).toBeInTheDocument();
  })

  it('Render in the correct path', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <LocationDisplay />
        </MemoryRouter>
      </Provider>
    );
    const route = '/login';
    expect(screen.getByTestId('location-display')).toHaveTextContent(route)
  })

  it('Render without crashing', () => {
    const LoginRender = render(
      <Provider store={store}>
        <Login />
      </Provider>, { wrapper: BrowserRouter }
    );

    expect(LoginRender);
  })

  it('should handle initial state of form', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <LocationDisplay />
          <Login />
        </MemoryRouter>
      </Provider>
    );
    const email = screen.getByRole('textbox', { name: /email/i }).textContent;
    const password = screen.getByRole('textbox', { name: /password/i }).textContent;

    expect(email).toEqual('');
    expect(password).toEqual('');
  })

  it('should redirect when is authenticated', async () => {
    const state: AuthState = {
      isAuthenticated: true,
      status: 'fulfilled',
      error: ""
    }
    const spy = vi.spyOn(hooks, 'useAppSelector');
    spy.mockReturnValue(state);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <LocationDisplay />
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const locationPath = screen.getByTestId('location-display').textContent;
    expect(locationPath).toEqual('/');
  });

  it('should render loading when login is pending', async () => {
    const state: AuthState = {
      isAuthenticated: false,
      status: 'pending',
      error: "",
    }

    const spy = vi.spyOn(hooks, 'useAppSelector');
    spy.mockReturnValue(state);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <LocationDisplay />
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByTestId('button-login')).toBeDisabled();
  });

  /* it('should render error toast when login fails', async () => {
    const state: AuthState = {
      isAuthenticated: false,
      status: 'rejected',
      error: 'error'
    }
    const spy = vi.spyOn(hooks, 'useAppSelector');
    spy.mockReturnValue(state);

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <LocationDisplay />
          <Login />
          <Toaster />
        </MemoryRouter>
      </Provider>
    );

    const errorToast = screen.getByText(state.error);
    console.log(errorToast);
  }); */
})
