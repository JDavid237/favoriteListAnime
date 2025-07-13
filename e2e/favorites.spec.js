// e2e/favorites.spec.js
import { test, expect } from "@playwright/test";

test("navigate and favorite anime", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await expect(page).toHaveTitle(/anime/i);

  const searchInput = page.getByPlaceholder("Dragon ball, Naruto, Pokemon...");
  await searchInput.fill("naruto");
  await page.waitForTimeout(1000); 

  const animeCard = page.locator(".anime").first();
  await expect(animeCard).toBeVisible();

  const favoriteIcon = animeCard.locator(".heart");
  await favoriteIcon.click();
  await favoriteIcon.click();

  await expect(page.locator(".swal2-container")).toBeVisible();

  await animeCard.click();
  await expect(page).toHaveURL(/details/);

});
