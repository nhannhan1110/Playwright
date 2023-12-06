const { test, expect } = require("@playwright/test");
const { access_token } = require("../../../scripts/session-storage-create");
const { username, password } = require("../../../scripts/config.json");

// @ts-check
// test.describe.configure({ mode: "serial" });

// // --------------- START AUTHENTICATION -----------------------
// /** @type {import('@playwright/test').Page} */
// let page;

// test.beforeAll(async ({ browser }) => {
//   const token = `${JSON.stringify(access_token)}`.replace(/"/g, '\\"');
//   page = await browser.newPage();
//   await page.goto("https://cms-pos.ducanhzed.com/login");
//   page.addInitScript(
//     `window.sessionStorage.setItem("access_token",'${token}')`
//   );
// });
// // ------------------- END AUTHENTICATION -----------------------

// test.afterAll(async () => {
//   await page.close();
// });

test.beforeEach(async ({ page }) => {
  await page.goto("https://cms-pos.ducanhzed.com/private");
  await page.locator("[id = username]").fill(username);
  await page.locator("[id = password]").fill(password);
  await page.getByRole("button", { name: "Đăng nhập" }).click();
  await page.getByRole("img", { name: "menu-unfold" }).locator("svg").click();
  await page.getByRole("link", { name: "Nhập hàng", exact: true }).click();
});

test.describe("shipVia", () => {
  test("submit when shipVia empty", async ({ page }) => {
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
    await page.locator("#shipVia").clear();
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipVia_help")).toHaveText(
      "Vui lòng nhập phương tiện"
    );
  });
  test("submit when enter space in shipVia", async ({ page }) => {
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
    await page.locator("#shipVia").fill(" ");
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipVia_help")).toHaveText(
      "Vui lòng nhập phương tiện"
    );
  });
});

test.describe("shipName", () => {
  test("submit when shipName empty", async ({ page }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
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
    await page.locator("#shipName").clear();
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipName_help")).toHaveText(
      "Vui lòng nhập tên vận chuyển"
    );
  });
  test("submit when enter space in shipName", async ({ page }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
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
    await page.locator("#shipName").fill(" ");
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipName_help")).toHaveText(
      "Vui lòng nhập tên vận chuyển"
    );
  });
});

test.describe("shipAddress", () => {
  test("submit when shipAddress empty", async ({ page }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
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
    await page.locator("#shipAddress").clear();
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipAddress_help")).toHaveText(
      "Vui lòng nhập địa điểm"
    );
  });
  test("submit when enter space in shipAddress", async ({ page }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
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
    await page.locator("#shipAddress").fill(" ");
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipAddress_help")).toHaveText(
      "Vui lòng nhập địa điểm"
    );
  });
});
test.describe("shipCity", () => {
  test("submit when shipCity empty", async ({ page }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipRegion")).not.toBeEmpty();
    await expect(page.locator("#shipCountry")).not.toBeEmpty();
    await expect(page.locator("#shipPostalCode")).not.toBeEmpty();
    await page.locator("[id = supplierId]").click();
    await page.getByTitle("Chivas").click();
    await page.click("label[for='totalAmount']");
    await page.keyboard.type("500000");
    await page.click("label[for='notes']");
    await page.keyboard.type("note");
    await page.locator("#shipCity").clear();
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipCity_help")).toHaveText(
      "Vui lòng nhập thành phố"
    );
  });
  test("submit when enter space in shipCity", async ({ page }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipRegion")).not.toBeEmpty();
    await expect(page.locator("#shipCountry")).not.toBeEmpty();
    await expect(page.locator("#shipPostalCode")).not.toBeEmpty();
    await page.locator("[id = supplierId]").click();
    await page.getByTitle("Chivas").click();
    await page.click("label[for='totalAmount']");
    await page.keyboard.type("500000");
    await page.click("label[for='notes']");
    await page.keyboard.type("note");
    await page.locator("#shipCity").fill(" ");
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipCity_help")).toHaveText(
      "Vui lòng nhập thành phố"
    );
  });
});
test.describe("shipRegion", () => {
  test("submit when shipRegion empty", async ({ page }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipCity")).not.toBeEmpty();
    await expect(page.locator("#shipCountry")).not.toBeEmpty();
    await expect(page.locator("#shipPostalCode")).not.toBeEmpty();
    await page.locator("[id = supplierId]").click();
    await page.getByTitle("Chivas").click();
    await page.click("label[for='totalAmount']");
    await page.keyboard.type("500000");
    await page.click("label[for='notes']");
    await page.keyboard.type("note");
    await page.locator("#shipRegion").clear();
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipRegion_help")).toHaveText(
      "Vui lòng nhập vùng"
    );
  });
  test("submit when enter space in shipRegion", async ({ page }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipCity")).not.toBeEmpty();
    await expect(page.locator("#shipCountry")).not.toBeEmpty();
    await expect(page.locator("#shipPostalCode")).not.toBeEmpty();
    await page.locator("[id = supplierId]").click();
    await page.getByTitle("Chivas").click();
    await page.click("label[for='totalAmount']");
    await page.keyboard.type("500000");
    await page.click("label[for='notes']");
    await page.keyboard.type("note");
    await page.locator("#shipRegion").fill(" ");
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipRegion_help")).toHaveText(
      "Vui lòng nhập vùng"
    );
  });
});
test.describe("shipCountry", () => {
  test("submit when shipCountry empty", async ({ page }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipCity")).not.toBeEmpty();
    await expect(page.locator("#shipRegion")).not.toBeEmpty();
    await expect(page.locator("#shipPostalCode")).not.toBeEmpty();
    await page.locator("[id = supplierId]").click();
    await page.getByTitle("Chivas").click();
    await page.click("label[for='totalAmount']");
    await page.keyboard.type("500000");
    await page.click("label[for='notes']");
    await page.keyboard.type("note");
    await page.locator("#shipCountry").clear();
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipCountry_help")).toHaveText(
      "Vui lòng nhập quốc gia"
    );
  });
  test("submit when enter space in shipCountry", async ({ page }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipCity")).not.toBeEmpty();
    await expect(page.locator("#shipRegion")).not.toBeEmpty();
    await expect(page.locator("#shipPostalCode")).not.toBeEmpty();
    await page.locator("[id = supplierId]").click();
    await page.getByTitle("Chivas").click();
    await page.click("label[for='totalAmount']");
    await page.keyboard.type("500000");
    await page.click("label[for='notes']");
    await page.keyboard.type("note");
    await page.locator("#shipCountry").fill(" ");
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipCountry_help")).toHaveText(
      "Vui lòng nhập quốc gia"
    );
  });
});
test.describe("shipPostalCode", () => {
  test("submit when shipPostalCode empty", async ({ page }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipCity")).not.toBeEmpty();
    await expect(page.locator("#shipRegion")).not.toBeEmpty();
    await expect(page.locator("#shipCountry")).not.toBeEmpty();
    await page.locator("[id = supplierId]").click();
    await page.getByTitle("Chivas").click();
    await page.click("label[for='totalAmount']");
    await page.keyboard.type("500000");
    await page.click("label[for='notes']");
    await page.keyboard.type("note");
    await page.locator("#shipPostalCode").clear();
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipPostalCode_help")).toHaveText(
      "Vui lòng nhập mã bưu cục"
    );
  });
  test("submit when enter space in shipPostalCode", async ({ page }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipCity")).not.toBeEmpty();
    await expect(page.locator("#shipRegion")).not.toBeEmpty();
    await expect(page.locator("#shipCountry")).not.toBeEmpty();
    await page.locator("[id = supplierId]").click();
    await page.getByTitle("Chivas").click();
    await page.click("label[for='totalAmount']");
    await page.keyboard.type("500000");
    await page.click("label[for='notes']");
    await page.keyboard.type("note");
    await page.locator("#shipPostalCode").fill(" ");
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipPostalCode_help")).toHaveText(
      "Vui lòng nhập mã bưu cục"
    );
  });
  test("when enter over 10 digits in shipPostalCode", async ({ page }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipCity")).not.toBeEmpty();
    await expect(page.locator("#shipRegion")).not.toBeEmpty();
    await expect(page.locator("#shipCountry")).not.toBeEmpty();
    await page.locator("[id = supplierId]").click();
    await page.getByTitle("Chivas").click();
    await page.click("label[for='totalAmount']");
    await page.keyboard.type("500000");
    await page.click("label[for='notes']");
    await page.keyboard.type("note");
    await page.locator("#shipPostalCode").fill("01234567890");
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipPostalCode_help")).toHaveText(
      "Vui lòng nhập không quá 10 kí tự"
    );
  });
  test("validate when entering alpha characters in shipPostalCode", async ({
    page,
  }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipCity")).not.toBeEmpty();
    await expect(page.locator("#shipRegion")).not.toBeEmpty();
    await expect(page.locator("#shipCountry")).not.toBeEmpty();
    await page.locator("[id = supplierId]").click();
    await page.getByTitle("Chivas").click();
    await page.click("label[for='totalAmount']");
    await page.keyboard.type("500000");
    await page.click("label[for='notes']");
    await page.keyboard.type("note");
    await page.locator("#shipPostalCode").fill("mabuucuc");
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipPostalCode_help")).toHaveText(
      "Vui lòng nhập số"
    );
  });
  test("validate when entering special character in shipPostalCode", async ({
    page,
  }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipCity")).not.toBeEmpty();
    await expect(page.locator("#shipRegion")).not.toBeEmpty();
    await expect(page.locator("#shipCountry")).not.toBeEmpty();
    await page.locator("[id = supplierId]").click();
    await page.getByTitle("Chivas").click();
    await page.click("label[for='totalAmount']");
    await page.keyboard.type("500000");
    await page.click("label[for='notes']");
    await page.keyboard.type("note");
    await page.locator("#shipPostalCode").fill("@#{(");
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipPostalCode_help")).toHaveText(
      "Vui lòng nhập số"
    );
  });
  test("validate when entering 0 in shippostalcode field ", async ({
    page,
  }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipCity")).not.toBeEmpty();
    await expect(page.locator("#shipRegion")).not.toBeEmpty();
    await expect(page.locator("#shipCountry")).not.toBeEmpty();
    await page.locator("[id = supplierId]").click();
    await page.getByTitle("Chivas").click();
    await page.click("label[for='totalAmount']");
    await page.keyboard.type("500000");
    await page.click("label[for='notes']");
    await page.keyboard.type("note");
    await page.locator("#shipPostalCode").fill("00000");
    await page.locator("#save-info-button").click();
    await expect(page.locator("#shipPostalCode_help")).toHaveText(
      "Vui lòng kiểm tra lại mã bưu cục"
    );
  });
});
test.describe("validate supplier", () => {
  test("Verify that the user can choose any value from the dropdown by clicking", async ({
    page,
  }) => {
    await page.locator("[id = supplierId]").click();
    await page
      .locator(
        "(//div[@class='ant-select-item ant-select-item-option ant-select-item-option-active'])"
      )
      .isEnabled();

    for (let i = 1; i < 12; i++) {
      const index = page.locator(
        "(//div[@class='ant-select-item ant-select-item-option'])[" + i + "]"
      );
      await index.isEnabled();
      index.scrollIntoViewIfNeeded();
    }
  });
  test("Verify that the user don't choose any value from the dropdown", async ({
    page,
  }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipCity")).not.toBeEmpty();
    await expect(page.locator("#shipRegion")).not.toBeEmpty();
    await expect(page.locator("#shipCountry")).not.toBeEmpty();
    await expect(page.locator("#shipPostalCode")).not.toBeEmpty();
    await page.click("label[for='totalAmount']");
    await page.keyboard.type("500000");
    await page.click("label[for='notes']");
    await page.keyboard.type("note");
    await page.locator("#save-info-button").click();
    await expect(page.locator("#supplierId_help")).toHaveText(
      "Vui lòng chọn nhà cung cấp"
    );
  });
  test("Verify that the value from the list should be selected if the user adds a valid keyword", async ({
    page,
  }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipCity")).not.toBeEmpty();
    await expect(page.locator("#shipRegion")).not.toBeEmpty();
    await expect(page.locator("#shipCountry")).not.toBeEmpty();
    await expect(page.locator("#shipPostalCode")).not.toBeEmpty();
    await page.locator("[id = supplierId]").click();
    await page.keyboard.type("JN Tech");
    await expect(page.locator("#supplierId_list")).not.toHaveClass(
      /ant-select-item-empty/
    );
  });
  test("Verify in case the user adds an invalid keyword", async ({ page }) => {
    await expect(page.locator("#shipVia")).not.toBeEmpty();
    await expect(page.locator("#shipName")).not.toBeEmpty();
    await expect(page.locator("#shipAddress")).not.toBeEmpty();
    await expect(page.locator("#shipCity")).not.toBeEmpty();
    await expect(page.locator("#shipRegion")).not.toBeEmpty();
    await expect(page.locator("#shipCountry")).not.toBeEmpty();
    await expect(page.locator("#shipPostalCode")).not.toBeEmpty();
    await page.locator("[id = supplierId]").click();
    await page.keyboard.type("@@@@");
    await expect(page.locator("#supplierId_list")).toHaveClass(
      /ant-select-item-empty/
    );
  });
});
test.describe("totalAmount", async () => {
  test("Verify by adding only the spaces in the total amount field", async ({
    page,
  }) => {});
  test("Verify if user do not enter in total amount field", async ({
    page,
  }) => {});
  test("Verify the max length limit for the amount field", async ({
    page,
  }) => {});
  test("Verify the min amount limit for the field", async ({ page }) => {});
  test("Verify if user enter alphabet in total amount field", async ({
    page,
  }) => {});
  test("Verify is user enter special character in total amount field", async ({
    page,
  }) => {});
  test("Verify if user enter 0", async ({ page }) => {});
});
