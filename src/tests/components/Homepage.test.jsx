import { render, screen } from "@testing-library/react";
import Homepage from "../../pages/Homepage";
import { BrowserRouter } from "react-router-dom";

describe("Homepage", () => {
  it("should render the Homepage with book sections", () => {
    render(
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    );

    expect(screen.getByText(/books/i)).toBeInTheDocument();
    expect(screen.getByText(/new in fiction/i)).toBeInTheDocument();
    expect(screen.getByText(/new in nonfiction/i)).toBeInTheDocument();
    expect(screen.getByText(/new in classics/i)).toBeInTheDocument();
    expect(screen.getByText(/new in history/i)).toBeInTheDocument();
    expect(screen.getByText(/new in fantasy/i)).toBeInTheDocument();
  });
});
