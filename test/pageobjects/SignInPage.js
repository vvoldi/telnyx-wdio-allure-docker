import Page from "./Page";

export class SignInPage extends Page {
    open(path) {
        return super.open(path);
    }
    elements = {
        microsoftSignInBTN: () => $("form[aria-label='microsoftForm']"),
        emailInput: () => $("input[name='email']"),
        passInput: () => $("input[name='password']"),
        logInBTN: () => $("//button[normalize-space()='Log in']"),
        microsoftForm: {
            email: () => $('input[name="loginfmt"]'),
            emailNextBTN: () => $("#idSIButton9"),
            pass: () => $('input[type="password"]'),
            submitBTN: () => $("#idSIButton9"),
            doNotSavePassBTN: () => $("#idBtn_Back"),
        },
    };

    async doLogin(user) {
        await this.elements.emailInput().setValue(user.email);
        await this.elements.passInput().setValue(user.pass);
        await this.elements.logInBTN().click();
    }
    async doMicrosoftLogin(user) {
        await this.elements.microsoftSignInBTN().click();
        await browser.switchWindow("login.microsoftonline.com");
        await this.elements.microsoftForm.email().setValue(user.email);
        await this.elements.microsoftForm.emailNextBTN().click();
        await browser.pause(1000)
        await this.elements.microsoftForm.pass().setValue(user.pass);
        await this.elements.microsoftForm.submitBTN().click();
        await browser.keys("Enter");
        await browser.keys("Enter");
        
        // await this.elements.microsoftForm.doNotSavePassBTN().click();
    }
}

export default new SignInPage();
