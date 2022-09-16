import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@views/App";
import { RecoilRoot } from "recoil";

describe("Check App", () => {
  test("check if app is reandering home", () => {
    render(
      <RecoilRoot>
        <App />
      </RecoilRoot>,
    );
    const text = screen.getByText(/React Boilerplate/i);
    expect(text).toBeDefined;
  });
});
