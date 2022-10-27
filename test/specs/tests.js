import ContactUsPage from "../pageobjects/ContactUsPage";
import MainPage from "../pageobjects/MainPage";
import Page from "../pageobjects/Page";
import users from "../helpers/users.json";
import BlogPage from "../pageobjects/BlogPage";
import ReleaseNotesPage from "../pageobjects/ReleaseNotesPage";
import { firstLetterToUppercase } from "../helpers/capitalizer";
import SignInPage from "../pageobjects/SignInPage";

beforeEach("Cookies accept", async () => {
    const page = new Page();
    await page.open();
    page.closeCookies();
});

describe("UI", () => {
    it("should verify drop-down menu on Product", async () => {
        await MainPage.hoverOnProductsTab();
        await MainPage.elements.elementsOfProductsTab().map((e) => expect(e).toBeDisplayed());
    });
    it("should be opened Network page from header", async () => {
        await MainPage.elements.headerNetworkBTN().click();
        await expect(browser).toHaveUrlContaining("solutions/global-ip-network");
    });
    it("should verify drop-down menu on Resources ", async () => {
        await MainPage.hoverOnRecourcesTab();
        await MainPage.elements.elementsOfResourcesTab().map((e) => expect(e).toBeDisplayed());
    });
    it("should verify drop-down menu on Pricing ", async () => {
        await MainPage.hoverOnPricingTab();
        await MainPage.elements.elementsOfPricingTab().map((e) => expect(e).toBeDisplayed());
    });
    it("should be opened Support page from header", async () => {
        await MainPage.elements.supportCenterBTN().click();
        await expect(browser).toHaveUrlContaining("https://support.telnyx.com");
    });
    it("should be opened Contact us page from header", async () => {
        await MainPage.elements.talkToExpertBTN().click();
        await expect(browser).toHaveUrlContaining("/contact-us");
    });
    it("should be opened Main page from Contact Us Page", async () => {
        await ContactUsPage.open("/contact-us");
        await ContactUsPage.elements.logo().click();
        await expect(browser).toHaveUrl("https://telnyx.com/");
    });
    it("should be verified Sales Inquiry reson in select on Contact us Page", async () => {
        await ContactUsPage.open("/contact-us");
        await ContactUsPage.elements.selectReason().selectByAttribute("value", "Sales-Inquiry");
        await expect(ContactUsPage.elements.salesInquiryOption()).toBeSelected();
        await expect(ContactUsPage.elements.selectPrimaryInterest()).toBeDisplayed();
    });
    it("should be filled and sent Contact us form", async () => {
        await ContactUsPage.open("/contact-us");
        await ContactUsPage.fillForm();
        await expect(browser).toHaveUrlContaining(`/thank-you?userEmail=${users.contactUsUser.email.replace(/\@/g, "%40")}`);
    });
    it("should be opened Products page from footer", async () => {
        await MainPage.elements.seeAllProductsBTN().click();
        await expect(browser).toHaveUrl("https://telnyx.com/products");
    });
    it("should be opened Blog page from footer", async () => {
        await MainPage.elements.blogBTN().click();
        await expect(browser).toHaveUrl("https://telnyx.com/resources");
    });
    it("should be searched 'hello' on Blog page", async () => {
        await BlogPage.open("/resources");
        await BlogPage.doSearch("hello");
        await expect(browser).toHaveUrlContaining("/resources/search?q=hello");
    });
    it("should be opened Release Notes Page from footer", async () => {
        await MainPage.elements.releaseNotesBTN().click();
        await expect(browser).toHaveUrl("https://telnyx.com/release-notes");
    });
    it("should be searched 'voice' on Release Notes Page from footer", async () => {
        const searchQueryString = "voice";
        await ReleaseNotesPage.open("/release-notes");
        await ReleaseNotesPage.doSearch(searchQueryString);
        await expect(ReleaseNotesPage.elements.firstSearchedElement()).toHaveTextContaining(firstLetterToUppercase(searchQueryString));
    });
    it("should be filtered by WhatsApp on Release Notes Page", async () => {
        await ReleaseNotesPage.open("/release-notes");
        await ReleaseNotesPage.elements.inputWhatsAppCheckbox().click();
        await expect(ReleaseNotesPage.elements.whatsAppFilteredElements()).toHaveTextContaining("WhatsApp");
    });
    it("should be checked LinkedIn social from footer", async () => {
        await MainPage.elements.linkedInBTN().click();
        await browser.switchWindow("linkedin.com");
        await expect(browser).toHaveUrlContaining("linkedin.com");
    });
    it("should be checked Twitter social from footer", async () => {
        await MainPage.elements.twitterBTN().click();
        await browser.switchWindow("twitter.com");
        await expect(browser).toHaveUrl("https://twitter.com/telnyx");
    });
    it("should be checked Facebook social from footer", async () => {
        await MainPage.elements.facebookBTN().click();
        await browser.switchWindow("facebook.com");
        await expect(browser).toHaveUrlContaining("facebook.com");
    });
});

describe("Logging in", () => {
    it("should be Logged in with valid credentials", async () => {
        await SignInPage.open("https://portal.telnyx.com/#/login/sign-in");
        await SignInPage.doLogin(users.defaultProfileUser);
        await expect(browser).toHaveUrlContaining("/#/app/home");
    });
    xit("should be Logged in with Microsoft", async () => {
        await SignInPage.open("https://portal.telnyx.com/#/login/sign-in");
        await SignInPage.doMicrosoftLogin(users.microsoftUser);
        await expect(browser).toHaveUrlContaining("/#/app/home");
    });
});
