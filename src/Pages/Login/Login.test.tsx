import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import Login from './LoginContainer'
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { LocationDisplay } from '../../Routes';
/* import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history'; */

describe('Login', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <Provider store={store}>
          <Login />
        </Provider>
        <LocationDisplay />
      </MemoryRouter>
    );
  })
  afterEach(cleanup);

  it('Render in the correct path', () => {
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
    //screen.debug()
  })

  it('should handle initial state of form', () => {
    const email = screen.getByRole('textbox', { name: /email/i }).textContent;
    const password = screen.getByRole('textbox', { name: /password/i }).textContent;

    expect(email).toEqual('');
    expect(password).toEqual('');
  })

  /*   it('should correctly login', async () => {
      const user = userEvent.setup();
      const history = createMemoryHistory({initialEntries: ['/login']});
  
      await user.type(screen.getByRole('textbox', { name: /email/i }), 'rhavila789@gmail.com');
      await user.type(screen.getByRole('textbox', { name: /password/i }), '72674560');
      await user.click(screen.getByRole('button', { name: /iniciar sesión/i }));
  
      expect(await screen.findByTestId('home', undefined, { timeout: 35000 })).toBeInTheDocument()
    }) */
})
