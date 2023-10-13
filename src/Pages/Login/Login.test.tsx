import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Login from './LoginContainer'
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { BrowserRouter } from 'react-router-dom';


describe('Login', () => {
  it('Render without crashing', () => {
    const LoginRender = render(
      <Provider store={store}>
        <Login />
      </Provider>, { wrapper: BrowserRouter }
    );

    expect(LoginRender);
    //screen.debug()
  })
})
