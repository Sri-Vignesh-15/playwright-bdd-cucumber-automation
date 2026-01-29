import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { test } from '../fixture/fixtures';

const { Given, When, Then } = createBdd(test);
const URL = 'https://ecommerce-playground.lambdatest.io/';
const username = '22238@slcs.edu.in';
const password = 'Kannan@1512';
const logged_URL = 'route=account/account';

Given('the user navigates to the application', async ({ logInPage }) => {
  await logInPage.navigateToURL(URL);
});

Given('the user is on the login page', async ({ logInPage }) => {
  await logInPage.clickMyAccount();
});

When('the user enters valid username and password', async ({ logInPage }) => {
  await logInPage.enterEmailAndPassword(username, password);
  await logInPage.clickLoginButton();
});

Then('the user should be logged in successfully', async ({ page }) => {
  await expect(page).toHaveURL(new RegExp(logged_URL));
});

When(
  'the user enter invalid {string} and {string}',
  async ({ logInPage }, useremail, pass) => {
    await logInPage.enterEmailAndPassword(useremail, pass);
    await logInPage.clickLoginButton();
  }
);

Then('the user should see an error message', async ({ logInPage }) => {
  await logInPage.verifyAlertMessage();
});
