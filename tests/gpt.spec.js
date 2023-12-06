const { test, expect } = require('@playwright/test');

test('Login E2E Test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://cms-pos.ducanhzed.com/login');

  // Define locators for the username, password, and login button
  const usernameInput = page.locator('#username');
  const passwordInput = page.locator('#password');
  // const loginButton = page.locator('#login-button');

  // Fill in the username and password fields
  await usernameInput.fill('username');
  await passwordInput.fill('password');

  // PRESS ENTER
  await passwordInput.press('Enter');

  // Wait for navigation to complete
  await page.waitForNavigation();

  // Verify that the login was successful
  const url = page.url();
  const Dashboard = await page.getByText('Dashboard');

  expect(url).toContain('/private');
  expect(Dashboard).toBeTruthy();
});
