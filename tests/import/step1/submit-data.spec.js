const { test, expect } = require("@playwright/test");
const { access_token } = require("../../../scripts/session-storage-create");
const { username, password } = require("../../../scripts/config.json");

test.beforeEach(async ({ page }) => {
  await page.goto("https://cms-pos.ducanhzed.com/private");
  await page.locator("[id = username]").fill(username);
  await page.locator("[id = password]").fill(password);
  await page.getByRole("button", { name: "Đăng nhập" }).click();
  await page.getByRole("img", { name: "menu-unfold" }).locator("svg").click();
  await page.getByRole("link", { name: "Nhập hàng", exact: true }).click();
});

test("Verify that the user enter valid data and submit", async ({ page }) => {
  await expect(page.locator("#shipVia")).not.toBeEmpty();
  await expect(page.locator("#shipName")).not.toBeEmpty();
  await expect(page.locator("#shipAddress")).not.toBeEmpty();
  await expect(page.locator("#shipCity")).not.toBeEmpty();
  await expect(page.locator("#shipRegion")).not.toBeEmpty();
  await expect(page.locator("#shipCountry")).not.toBeEmpty();
  await expect(page.locator("#shipPostalCode")).not.toBeEmpty();
  await page.locator("[id = supplierId]").click();
  await page.getByTitle("Chivas").click();
  await page.click("label[for='totalAmount']");
  await page.keyboard.type("500000");
  await page.click("label[for='notes']");
  await page.keyboard.type("note");
  await page.locator("#save-info-button").click();
  await page.getByText("Nhập lại").isEnabled();
});
