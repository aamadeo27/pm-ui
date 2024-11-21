import { render, screen } from "@testing-library/react";
import Topbar from ".";
import { User } from "../../generated/graphql";

describe("Top Bar", () => {
  it("should render", () => {
    render(<Topbar user={{} as User} />);

    expect(screen.getByText("Search bar"));
    expect(screen.getByText("My Projects"));
    expect(screen.getByTestId("avatar"));
    expect(screen.getByTestId("notifications"));
  });
});
