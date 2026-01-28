import { Locator,Page,expect } from '@playwright/test'

export class LoginPage{
    protected page: Page;
    readonly website_Logo: Locator;
    readonly my_Account_Btn: Locator;
    readonly login_page: Locator;
    readonly email_Field: Locator;
    readonly password_Field: Locator;
    readonly login_Btn: Locator;
    readonly alert_Message: Locator;

    constructor(page: Page){
        this.page=page;
        this.website_Logo = page.getByRole('img', {name: 'Poco Electro'});
        this.my_Account_Btn = page.getByRole('button', {name: ' My account'});
        this.login_page = page.locator('.account-login');
        this.email_Field = page.getByLabel('E-Mail Address');
        this.password_Field = page.getByLabel('Password');
        this.login_Btn = page.getByRole('button', {name:'Login'});
        this.alert_Message = page.locator('.alert.alert-danger.alert-dismissible');
    }

    async navigateToURL(URL: string){
        await this.page.goto(URL);
        await expect(this.website_Logo).toBeVisible();
    }

    async clickMyAccount(){
        await this.my_Account_Btn.click();
        await expect(this.login_page).toBeVisible();
    }

    async enterEmailAndPassword(email: string,password: string){
        await this.email_Field.fill(email);
        await this.password_Field.fill(password);
    }

    async clickLoginButton(){
        await this.login_Btn.click();
    }

    async verifyAlertMessage(){
        await expect(this.alert_Message).toBeVisible();
        // await expect(this.alert_Message).toHaveText(" Warning: No match for E-Mail Address and/or Password.");
    }
}