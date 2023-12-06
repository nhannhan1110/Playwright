// import { chromium, test } from "@playwright/test";
// const { default: axios } = require("axios");
// const fs = require("fs");
// const authData = require("./scripts/config.json");
// const { access_token } = require("./.auth/session-storage.json");

// // @ts-check

// async function globalSetup() {
//   const browser = await chromium.launch({ headless: false });
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   // test.describe.configure({ mode: "serial" });

//   /** @type {import('@playwright/test').Page} */
//   await page.goto("https://cms-pos.ducanhzed.com/login");
//   page.addInitScript(
//     `window.sessionStorage.setItem("access_token", "${access_token}")`
//   );

//   // await page.goto("https://cms-pos.ducanhzed.com/login");
//   // await page.locator("[id = username]").fill("username");
//   // await page.locator("[id = password]").fill("password");
//   // await page.getByRole("button", { name: "Đăng nhập" }).click();
//   // await expect(page).toHaveURL(/.*private/);

//   //   await page.context().storageState({ path: "./LoginAuth.json" });

//   // await browser.close();
// }
// export default globalSetup;
