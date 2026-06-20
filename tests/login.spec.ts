import { expect, test } from '@playwright/test';
test.describe('Login Test', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
  test('Login to hrm', async ({ page }) => {
    let username: string = 'Admin';
    let password: string = 'admin123';
    
    await page.getByRole('textbox', { name: 'Username' }).fill(username) 
    await page.getByRole('textbox', { name: 'Password' }).fill(password)
    await page.getByRole('button', { name: 'Login' }).click()

    await expect(page.getByRole('link',{ name: 'Admin' })).toBeVisible()
})
test('Login to hrm with invalid credentials- invalid username ', async ({ page }) => { 
  let invalidUsername: string = 'AdminIncorrect';
  let password: string = 'admin123';
  
  await page.getByRole('textbox', { name: 'Username' }).fill(invalidUsername) 
  await page.getByRole('textbox', { name: 'Password' }).fill(password)
  await page.getByRole('button', { name: 'Login' }).click() 
  await expect(page.getByText('Invalid credentials')).toBeVisible()   
    
})

test('Login with password incorrect', async ({ page }) => {
  let username: string = 'Admin';
  let invalidPassword: string = 'PasswordIncorrect';
  
  await page.getByRole('textbox', { name: 'Username' }).fill(username)
  await page.getByRole('textbox', { name: 'Password' }).fill(invalidPassword)
  await page.getByRole('button', { name: 'Login' }).click()

  await expect(page.getByText('Invalid credentials')).toBeVisible()

})
})