// @ts-check
const { test, expect } = require('@playwright/test');

test('Amazon website cases for Automation ', async ({ page }) => {
  // Open Amazon
  await page.goto('https://www.amazon.com/');
  // Click on amazon logo
  await page.locator('#nav-logo-sprites').click()
  // Click on Account
  await page.getByText('Account & Lists').click();
  // Enter username
  await page.locator('#ap_email').fill('donotmindothersmindyourself@gmail.com');
  // Click on Continue button
  await page.locator("[type$='submit']").click();
  // Enter password
  await page.locator('#ap_password').fill('Shivam!@123')
  // Click on Sign in button
  await page.locator('#signInSubmit').click()

  // 1st Test Objective
  // verify the user name after login (validate login) 
  await page.getByText('Hello, S&P');

  // Click on search bar and search for a product 
  await page.locator('#twotabsearchtextbox').fill('AA batteries')
  await page.keyboard.press('Enter')
  
  // 3rd test Objective
  // validating the search result 
  await expect.soft(page.locator('.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-3').nth(0))
  .toContainText('AA Batteries')
  
  // 2nd test Objective 
  // Adding to cart & checkout
  await page.getByRole('heading', { name: 'Energizer AA Batteries,' }).nth(0).click()
  await page.locator('#add-to-cart-button').click()
  await page.locator("[value$='Proceed to checkout']").click()
  await page.waitForTimeout(4000)
  await expect(page.locator('.a-column.a-span8').nth(0)).toContainText('Checkout')
  await page.goBack()
  await page.locator('#nav-cart').click()
  await page.locator("[value$='Delete']").click()
  
  // 4th test Objective
  //WISHLIST [Due to Amazon's internal validation I am not able to perform the desired operation
  // although I have written the code for it]

  // await page.locator('#add-to-wishlist-button-submit').click()
  // await page.waitForTimeout(5000)
  // await page.getByText('Hello, S&P').click()
  // await page.getByText('Your Lists').click()
  // await page.waitForTimeout(4000)
  // await expect(page.locator("[title$='Energizer AA Batteries, Alkaline Power Double A Battery Alkaline, 32 Count']").nth(1)).toContainText('Energizer AA Batteries')
  // await page.locator("[name$='submit.deleteItem']").click()

 });

