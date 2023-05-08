import { render, screen } from "@testing-library/react";
import { Link } from "./Link";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("Link", () => {
  it("компонент появился в DOM дереве", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Link color="secondary-200" href="/" testId="Link">
          test
        </Link>
      </Router>
    );

    const element = await screen.findByTestId("Link");
    expect(element).toBeInTheDocument();
  });

  it("переход по ссылке при клике", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Link color="secondary-200" href="/test" testId="Link">
          Test
        </Link>
      </Router>
    );

    const element = await screen.findByTestId("Link");
    await userEvent.click(element);

    expect(history.location.pathname).toBe("/test");
  });
});
