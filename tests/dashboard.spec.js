const { test, expect } = require("@playwright/test");
const { access_token } = require("../.auth/session-storage.json");
const { username, password } = require("../scripts/config.json");

// @ts-check
test.describe.configure({ mode: "serial" });

/** @type {import('@playwright/test').Page} */
//let page;

// test.beforeAll(async ({ browser }) => {
//   page = await browser.newPage();
//   await page.goto("https://cms-pos.ducanhzed.com/private");
//   page.addInitScript(
//     `
//     const jsonAccessToken=${JSON.stringify({ kkk: 2 }).toString()};
//     const typeOf= typeof jsonAccessToken;
//     console.log(typeOf,jsonAccessToken);
//     window.sessionStorage.setItem("access_token",jsonAccessToken)`
//   );
// });

test.beforeEach(async ({ page }) => {
  await page.goto("https://cms-pos.ducanhzed.com/login");
  await page.locator("[id = username]").fill(username);
  await page.locator("[id = password]").fill(password);
  await page.getByRole("button", { name: "Đăng nhập" }).click();
  await page.getByRole("img", { name: "menu-unfold" }).locator("svg").click();
  //await page.getByRole("link", { name: "Nhập hàng", exact: true }).click();
});

// test.afterAll(async () => {
//   await page.close();
// });
const linkTest = [
  "#dashboard",
  "#pos-home",
  "#pos-scan-item-code",
  "#list-product-category",
  "#list-product",
  "#import-product",
  "#stock-order",
  "#stock-inventory",
  "#ex-import-request",
  "#ex-import-request-confirm",
  "#depot-crud",
  "#depot-detail",
  "#ncc",
  "#choose-warehouse",
  "#warehouse-block-request",
  "#warehouse-transfer-form",
  "#warehouse-export",
  "#history-internal-transfer",
  //showroom
  //showroom
  //showroom
  // "#",
  // "#",
  // "#",
  "#department",
  "#group",
  "#user-warehouse",
  "#user",
  "#register",
];

const urlTest = [
  "https://cms-pos.ducanhzed.com/private",
  "https://cms-pos.ducanhzed.com/private/pos/home",
  "https://cms-pos.ducanhzed.com/private/pos/create-product",
];
test("check dashboard", async ({ page }) => {
  // await page.goto("https://cms-pos.ducanhzed.com/private");
  // await page.getByRole("img", { name: "menu-unfold" }).locator("svg").click();

  for (let i = 0; i < linkTest.length; i++) {
    await page.locator(linkTest[i]).isEnabled();
    // await expect(page).toHaveURL(urlTest[i]);
  }
});

const language = ["Vietnamese Tiếng Việt", "English Tiếng Anh"];
test.describe("Header", () => {
  test("check logo", async ({ page }) => {
    //await page.goto("https://cms-pos.ducanhzed.com/private");
    await page.getByAltText("logo").click();
  });

  test("check language", async ({ page }) => {
    // await page.goto("https://cms-pos.ducanhzed.com/private");
    await page.getByAltText("flag").click();
    for (let i = 0; i < language.length; i++) {
      await page
        .locator("(//ul[@role='menu'])[2]")
        .getByRole("menuitem", { name: language[i], exact: true })
        .isEnabled();
    }
  });

  test("check info", async ({ page }) => {
    await page
      .locator(
        "//a[@class='ant-dropdown-trigger']//div[@class='ant-space-item']"
      )
      .hover();
    await expect(
      page
        .locator(
          "//div[@class='ant-dropdown css-26rdvq ant-dropdown-placement-bottomRight ']//ul[@role='menu']"
        )
        .getByTitle("username")
    ).toHaveText("username", { exact: true });

    await expect(page.locator("#account-info")).toHaveText(
      "Thông tin tài khoản"
    );
    await expect(page.locator("#user-logout")).toHaveText("Đăng xuất");
  });

  test("check noti", async ({ page }) => {
    // await page.goto("https://cms-pos.ducanhzed.com/private");
    await page.getByRole("img", { name: "bell" }).locator("svg").click();
    await page.getByRole("heading", { name: "Thông báo" }).isVisible();
    await page
      .getByRole("button", { name: "Đánh dấu tất cả đã đọc" })
      .isVisible();
    //check có thông báo và ko có thông báo
    //await page.getByRole("img", { name: "check" }).locator("svg").click();
  });

  // await page.waitForTimeout(3000)
});
