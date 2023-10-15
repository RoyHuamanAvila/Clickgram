import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

describe('App', () => {
  afterEach(cleanup);

  it('render without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })

  it('verify location display is rendered', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(screen.getByTestId('location-display')).toBeInTheDocument()
  })

  it('initial page on login', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    const location = screen.getByTestId('location-display').textContent;
    expect(location).toEqual('/login')
  })
})
