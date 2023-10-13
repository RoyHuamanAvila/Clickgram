import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AccountWidget from "./AccountWidget";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter } from "react-router-dom";

describe('Account widget', () => {
  it('Render without crashing', () => {
    const AccountWidgetRender = render(
      <Provider store={store}>
        <AccountWidget />
      </Provider>, { wrapper: BrowserRouter }
    );

    const username = screen.getByTestId('username').innerText;
    console.log('username: ', username)

    expect(AccountWidgetRender)
  })
})
