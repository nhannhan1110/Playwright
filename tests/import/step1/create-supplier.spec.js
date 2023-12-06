const { test, expect } = require("@playwright/test");
const { access_token } = require("../../../scripts/session-storage-create");
const {
  username,
  password,
  error_message_over_100_digits,
} = require("../../../scripts/config.json");

test.beforeEach(async ({ page }) => {
  await page.goto("https://cms-pos.ducanhzed.com/private");
  await page.locator("[id = username]").fill(username);
  await page.locator("[id = password]").fill(password);
  await page.getByRole("button", { name: "Đăng nhập" }).click();
  await page.getByRole("img", { name: "menu-unfold" }).locator("svg").click();
  await page.getByRole("link", { name: "Nhập hàng", exact: true }).click();
});

const companyname = "companyname";
const contactname = "contactname";
const contacttitle = "contacttitle";
const address = "address";
const city = "city";
const region = "region";
const country = "country";
const postalcode = "70000";
const phone = "0987654321";
const fax = "0987654321";
const over100digits =
  "Điều của Bộ luật Lao động về tiền lương hành một số điều của Bộ luật Lao động về tiền lương lương hai";
const over100numberic =
  "01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890";
//fail over 100 digits
test.describe("companyName", () => {
  test("Verify if user cannot enter companyName", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#contactName").fill(contactname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#address").fill(address);
    await page.locator("#city").fill(city);
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#companyName_help")).toHaveText(
      "Chưa nhập tên công ty"
    );
  });
  test("Verify if user enter space in companyName", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(" ");
    await page.locator("#contactName").fill(contactname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#address").fill(address);
    await page.locator("#city").fill(city);
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#companyName_help")).toHaveText(
      "Chưa nhập tên công ty"
    );
  });
  test("Verify if user enter over 100 digits in companyName", async ({
    page,
  }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(over100digits);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#address").fill(address);
    await page.locator("#city").fill(city);
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#companyName_help")).toHaveText(
      error_message_over_100_digits
    );
  });
});
test.describe("contactName", () => {
  test("Verify if user cannot enter contactName", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(contactname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#address").fill(address);
    await page.locator("#city").fill(city);
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#contactName_help")).toHaveText(
      "Chưa nhập tên người liên hệ"
    );
  });
  test("Verify if user enter space in contactName", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactName").fill(" ");
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#address").fill(address);
    await page.locator("#city").fill(city);
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#contactName_help")).toHaveText(
      "Chưa nhập tên người liên hệ"
    );
  });
  test("Verify if user enter over 100 digits in contacName", async ({
    page,
  }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#contactName").fill(over100digits);
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#address").fill(address);
    await page.locator("#city").fill(city);
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#companyName_help")).toHaveText(
      error_message_over_100_digits
    );
  });
});
test.describe("contactTitle", () => {
  test("Verify if user cannot enter contactTitle", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#city").fill(city);
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#contactTitle_help")).toHaveText(
      "Chưa nhập chức vụ người liên hệ"
    );
  });
  test("Verify if user enter space in contactTitle", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#contactTitle").fill(" ");
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#city").fill(city);
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#contactTitle_help")).toHaveText(
      "Chưa nhập chức vụ người liên hệ"
    );
  });
  test("Verify if user enter over 100 digits in contacTitle", async ({
    page,
  }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#contactTitle").fill(over100digits);
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#city").fill(city);
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#contactTitle_help")).toHaveText(
      error_message_over_100_digits
    );
  });
});
test.describe("address", () => {
  test("Verify if user cannot enter address", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#city").fill(city);
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#address_help")).toHaveText("Chưa nhập địa chỉ");
  });
  test("Verify if user enter space in address", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#contactName").fill(contactname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#companyName").fill(companyname);
    await page.locator("#address").fill(" ");
    await page.locator("#city").fill(city);
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#address_help")).toHaveText("Chưa nhập địa chỉ");
  });
  test("Verify if user enter over 100 digits in address", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#contactName").fill(contactname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#companyName").fill(companyname);
    await page.locator("#address").fill(over100digits);
    await page.locator("#city").fill(city);
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#address_help")).toHaveText(
      error_message_over_100_digits
    );
  });
});
test.describe("city", () => {
  test("Verify if user cannot enter city", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#city_help")).toHaveText("Chưa nhập thành phố");
  });
  test("Verify if user enter space in city", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#city").fill(" ");
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#city_help")).toHaveText("Chưa nhập thành phố");
  });

  test("Verify if user enter over 100 digits in city", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#city").fill(over100digits);
    await page.locator("#region").fill(region);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#city_help")).toHaveText(
      error_message_over_100_digits
    );
  });
});
test.describe("region", () => {
  test("Verify if user cannot enter region", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#region_help")).toHaveText("Chưa nhập khu vực");
  });
  test("Verify if user enter space in region", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#city").fill(city);
    await page.locator("#region").fill(" ");
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#region_help")).toHaveText("Chưa nhập khu vực");
  });
  test("Verify if user enter over 100 digits in region", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#city").fill(city);
    await page.locator("#region").fill(over100digits);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#region_help")).toHaveText(
      error_message_over_100_digits
    );
  });
});
test.describe("postalCode", () => {
  test("Verify if user cannot enter postalCode", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#postalCode_help")).toHaveText(
      "Chưa nhập mã bưu cục"
    );
  });
  test("Verify if user enter space in postalCode", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(" ");
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#postalCode_help")).toHaveText(
      "Chưa nhập mã bưu cục"
    );
  });
  test("Verify if user enter over 10 digits in postalCode", async ({
    page,
  }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill("01234567890"); //11 digits
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#postalCode_help")).toHaveText(
      "Vui lòng nhập không quá 10 kí tự"
    );
  });
  test("Verify if user enter alphabet in postalcode field ", async ({
    page,
  }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill("abc");
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#postalCode_help")).toHaveText(
      "Vui lòng nhập số"
    );
  });
  test("Verfy if user enter special character in postalcode field", async ({
    page,
  }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill("!@#");
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#postalCode_help")).toHaveText(
      "Vui lòng nhập số"
    );
  });
  // test("Verify if user enter 0 in postalcode field", async ({ page }) => {
  //   await page.locator("#btn-create-supplier-import-product").click();
  //   await page.locator("#companyName").fill(companyname);
  //   await page.locator("#contactTitle").fill(contacttitle);
  //   await page.locator("#contactName").fill(contactname);
  //   await page.locator("#address").fill(address);
  //   await page.locator("#region").fill(region);
  //   await page.locator("#city").fill(city);
  //   await page.locator("#postalCode").fill("0");
  //   await page.locator("#country").fill(country);
  //   await page.locator("#phone").fill(phone);
  //   await page.locator("#fax").fill(fax);
  //   await page.locator("#btn-create-supplier-import-product-drawer").click();
  //   await expect(page.locator("#postalCode_help")).toHaveText(
  //     "Vui lòng nhập không quá 10 kí tự"
  //   );
  // });
});
test.describe("country", () => {
  test("Verify if user cannot enter country", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#country_help")).toHaveText(
      "Chưa nhập quốc gia"
    );
  });
  test("Verify if user enter space in country", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(" ");
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#country_help")).toHaveText(
      "Chưa nhập quốc gia"
    );
  });
  test("Verify if user enter over 100 digits in country", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(over100digits);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#country_help")).toHaveText(
      error_message_over_100_digits
    );
  });
});

test.describe("phone", () => {
  test("Verify if user cannot enter phone number", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#phone_help")).toHaveText(
      "Chưa nhập số điện thoại"
    );
  });
  test("Verify if user enter space in phone number", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(" ");
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#phone_help")).toHaveText(
      "Chưa nhập số điện thoại"
    );
  });
  test("Verify mobile number field when enter alphabets", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill("abc");
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#phone_help")).toHaveText(
      "Vui lòng kiểm tra lại số điện thoại"
    );
  });
  test("Verify mobile number field when enter special charaters", async ({
    page,
  }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill("!@#");
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#phone_help")).toHaveText(
      "Vui lòng kiểm tra lại số điện thoại"
    );
  });

  test("Verify the behaviour by adding more digits than the actual mobile number", async ({
    page,
  }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill("01234567890");
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#phone_help")).toHaveText(
      "Vui lòng kiểm tra lại số điện thoại"
    );
  });
  test("Verify by entering the less number than the actual mobile number", async ({
    page,
  }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill("012345678");
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#phone_help")).toHaveText(
      "Vui lòng kiểm tra lại số điện thoại"
    );
  });
  test("Verify the field should accept a valid phone number", async ({
    page,
  }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill("0987654321");
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    // await expect;
    // page
    //   .locator(
    //     "//div[@class='ant-drawer-content-wrapper ant-drawer-content-wrapper-hidden']"
    //   )
    //   .isVisible();
  });
  test("Verify is user enter 0", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill("0000000000"); //10 numberic 0
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(fax);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#phone_help")).toHaveText(
      "Vui lòng kiểm tra lại số điện thoại"
    );
  });
});

test.describe("fax", () => {
  test("Verify if user cannot enter fax field", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#fax_help")).toHaveText("Chưa nhập số fax");
  });
  test("Verify if user enter space in fax field", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill(" ");
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#fax_help")).toHaveText("Chưa nhập số fax");
  });
  test("Verify is user enter enter special character in fax field", async ({
    page,
  }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill("!@#");
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#fax_help")).toHaveText(
      "Vui lòng kiểm tra lại số fax"
    );
  });
  test("Verify if user enter alphatbet in fax field", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill("abc");
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#fax_help")).toHaveText(
      "Vui lòng kiểm tra lại số fax"
    );
  });
  test("Verify if user enter 0", async ({ page }) => {
    await page.locator("#btn-create-supplier-import-product").click();
    await page.locator("#companyName").fill(companyname);
    await page.locator("#contactTitle").fill(contacttitle);
    await page.locator("#contactName").fill(contactname);
    await page.locator("#address").fill(address);
    await page.locator("#region").fill(region);
    await page.locator("#city").fill(city);
    await page.locator("#postalCode").fill(postalcode);
    await page.locator("#country").fill(country);
    await page.locator("#phone").fill(phone);
    await page.locator("#fax").fill("0000000000");
    await page.locator("#btn-create-supplier-import-product-drawer").click();
    await expect(page.locator("#fax_help")).toHaveText(
      "Vui lòng kiểm tra lại số fax"
    );
  });
});
