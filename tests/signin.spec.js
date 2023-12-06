// @ts-check
const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("https://cms-pos.ducanhzed.com/login");
});

const account = {
  username: "username",
  password: "password",
  false_username: "username1",
  false_password: "password1",
};

test.describe("Login", () => {
  test("login screen has title", async ({ page }) => {
    const heading = await page.locator("//h4");
    await expect(heading).toHaveText("Đăng nhập");
    //await expect(page.getByRole('heading', { name: 'Đăng nhập' })).toBeVisible();
  });

  test("login success", async ({ page }) => {
    await expect(page).toHaveTitle("JnTech POS CMS");
    await page.locator("[id = username]").fill(account.username);
    await page.locator("[id = password]").fill(account.password);
    await page.getByRole("button", { name: "Đăng nhập" }).click();
    await expect(page).toHaveURL(/.*private/);
    await page.getByAltText("logo").click();
  });

  test("login without username", async ({ page }) => {
    await page.locator("[id = password]").fill(account.password);
    await page.getByRole("button", { name: "Đăng nhập" }).click();
    await expect(
      page.locator("text = Vui lòng điền tên đăng nhập!")
    ).toBeVisible();
  });

  test("login without password", async ({ page }) => {
    await page.locator("[id = username]").fill(account.username);
    await page.getByRole("button", { name: "Đăng nhập" }).click();
    //await page.getByRole('alert',{name: 'Vui nhập mật khẩu!'}).allTextContents();
    await expect(page.locator("text = Vui lòng nhập mật khẩu!")).toBeVisible();
  });

  test("login without username and password", async ({ page }) => {
    await page.getByRole("button", { name: "Đăng nhập" }).click();
    await expect(page.getByText("Vui lòng điền tên đăng nhập!")).toBeVisible();
    await expect(page.getByText("Vui lòng nhập mật khẩu!")).toBeVisible();
  });

  test("login with username is blank", async ({ page }) => {
    await page.getByPlaceholder("Tên đăng nhập").fill(" ");
    await page.getByPlaceholder("Mật khẩu").fill(account.password);
    await page.getByRole("button", { name: "Đăng nhập" }).click();
    await expect(
      page.locator("text = Vui lòng điền tên đăng nhập!")
    ).toBeVisible();
  });

  test("login with password is blank", async ({ page }) => {
    await page.getByPlaceholder("Tên đăng nhập").fill(account.username);
    await page.getByPlaceholder("Mật khẩu").fill(" ");
    await page.getByRole("button", { name: "Đăng nhập" }).click();
    await expect(page.locator("text = Vui lòng nhập mật khẩu")).toBeVisible();
  });

  test("login incorrect username ", async ({ page }) => {
    await page.getByPlaceholder("Tên đăng nhập").click();
    await page.getByPlaceholder("Tên đăng nhập").fill(account.false_username);
    await page.getByPlaceholder("Mật khẩu").click();
    await page.getByPlaceholder("Mật khẩu").fill(account.password);
    await page.getByRole("button", { name: "Đăng nhập" }).click();
    await expect(
      page.locator(
        "body > div.ant-notification.ant-notification-topRight.css-26rdvq > div"
      )
    ).toContainText("Có lỗi xảy raTên đăng nhập hoặc mật khẩu sai");
    //await page.locator('div').filter({ hasText: 'Có lỗi xảy raTên đăng nhập hoặc mật khẩu sai' }).nth(1).click();
    //await page.locator('a').nth(1).click();
  });

  test("login incorrect password", async ({ page }) => {
    await page.getByPlaceholder("Tên đăng nhập").click();
    await page.getByPlaceholder("Tên đăng nhập").fill(account.username);
    await page.getByPlaceholder("Mật khẩu").click();
    await page.getByPlaceholder("Mật khẩu").fill(account.false_password);
    await page.getByRole("button", { name: "Đăng nhập" }).click();
    await page
      .locator("div")
      .filter({ hasText: "Có lỗi xảy raTên đăng nhập hoặc mật khẩu sai" })
      .nth(1)
      .click();
    await page.locator("a").nth(1).click();
  });

  test("login success with enter", async ({ page }) => {
    await page.getByPlaceholder("Tên đăng nhập").click();
    await page.getByPlaceholder("Tên đăng nhập").fill(account.username);
    await page.getByPlaceholder("Mật khẩu").click();
    const pass = await page.getByPlaceholder("Mật khẩu");
    await pass.fill(account.password);
    await pass.press("Enter");
    await page.getByAltText("logo").click();
  });
});
