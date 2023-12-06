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

const locator_progress = [
  "#step-import-product .step-import-product-info",
  "#step-import-product .step-import-product-choose-file",
  "#step-import-product .step-import-product-create",
  "#step-import-product .step-import-product-confirm",
  "#step-import-product .step-import-product-finish",
];

test("Progress bar", async ({ page }) => {
  //check heading
  await page.goto("https://cms-pos.ducanhzed.com/private");

  await page.getByRole("img", { name: "menu-unfold" }).locator("svg").click();
  await page.getByRole("link", { name: "Nhập hàng", exact: true }).click();

  await page
    .getByRole("heading", { name: "NHẬP HÀNG", exact: true })
    .locator("//h5")
    .isVisible();

  //check color
  const bgcolor = page.locator(
    "//div[@role='button']//div[@class='ant-steps-item-icon']"
  );
  await expect(bgcolor).toHaveCSS("background-color", "rgb(22, 119, 255)");
  const color = page.locator("//div[contains(text(),'Thông tin')]");
  await expect(color).toHaveCSS("color", "rgba(0, 0, 0, 0.88)");

  // check progress bar
  await expect(page.locator(locator_progress[0])).toHaveClass(
    /ant-steps-item-active/
  );
  for (let i = 1; i < 5; i++) {
    await expect(page.locator(locator_progress[i])).toHaveClass(
      /ant-steps-item-disabled/
    );
  }
});
