import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import List from "../../pages/List"; 
import { FavoritesProvider } from "../../context/Favorites";
import { describe, it, expect } from "vitest";

describe("List Page", () => {
  it("renders message when no favorites", () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <List />
        </MemoryRouter>
      </FavoritesProvider>
    );

    expect(screen.getByText(/no tienes animes en favoritos/i)).toBeInTheDocument();
  });
});
