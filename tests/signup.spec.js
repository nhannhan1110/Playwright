const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://cms-pos.ducanhzed.com/login');
});

/*
test.describe('Signup', ()=>{
    
  test ('sign up success', async ({page})=>{
    await page.getByRole('link', {name: 'Đăng kí'}).click();
})

})
*/