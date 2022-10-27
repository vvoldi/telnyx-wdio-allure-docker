import Page from "./Page";

export class MainPage extends Page {
    elements = {
        productsTab: () => $('ul li[class*="khahzD"]:nth-child(1)'),
        elementsOfProductsTab: () => $$('li[class*="khahzD"]:nth-child(1) div[class*=bjOBlW] span'),
        headerNetworkBTN: () => $('header li [href="/solutions/global-ip-network"]'),
        resourcesTab: () => $("//div[contains(@class, 'hhCIhu')]//li[4]"),
        elementsOfResourcesTab: () => $$("//li[4]//div[@class='sc-7b3980dc-2 bjOBlW']"),
        pricingTab: () => $("//div[contains(@class, 'hhCIhu')]//li[6]"),
        elementsOfPricingTab: () => $$("//li[6]//div[@class='sc-7b3980dc-2 bjOBlW']"),
        supportCenterBTN: () => $('[href="https://support.telnyx.com/en/"]:nth-child(3)'),
        talkToExpertBTN: () => $("header ul li .byuCMl"),
        seeAllProductsBTN: () => $('footer a[href="/products"]'),   
        blogBTN: () => $('footer a[href="/resources"]'),
        releaseNotesBTN: () => $("footer a[href='/release-notes']"),
        linkedInBTN: () => $("//a[@href='https://www.linkedin.com/company/telnyx/']"),
        twitterBTN: () => $("//a[@href='https://twitter.com/telnyx']"),
        facebookBTN: () => $("//a[@href='https://www.facebook.com/Telnyx/']"),
    };

    async hoverOnProductsTab() {
        await this.elements.productsTab().moveTo();
    }
    async hoverOnRecourcesTab() {
        await this.elements.resourcesTab().moveTo();
    }
    async hoverOnPricingTab() {
        await this.elements.pricingTab().moveTo();
    }
    open(path) {
        return super.open(path);
    }
}

export default new MainPage();
