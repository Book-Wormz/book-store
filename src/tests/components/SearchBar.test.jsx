import { render, screen } from "@testing-library/react";
import SearchBar from "../../components/SearchBar";

describe("SearchBar", () => {
  const renderSearchBar = () => {
    render(<SearchBar />);

    return {
      inputField: screen.getByRole("textbox"),
      searchButton: screen.getByRole("button", { name: /search/i }),
    };
  };

  it("should render search input field", () => {
    const { inputField } = renderSearchBar();
    expect(inputField).toBeInTheDocument();
  });

  it("should render search button", () => {
    const { searchButton } = renderSearchBar();
    expect(searchButton).toBeInTheDocument();
  });

  it("should have an initially empty input field", () => {
    const { inputField } = renderSearchBar();
    expect(inputField.value).toBe("");
  });
});
