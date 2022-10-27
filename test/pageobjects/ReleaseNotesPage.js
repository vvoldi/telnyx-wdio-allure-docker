import Page from "./Page";

export class ReleaseNotesPage extends Page {
    open(path) {
        return super.open(path);
    }
    elements = {
        searchInput: () => $("#search"),
        firstSearchedElement: () => $("//section[1]/h3"),
        inputWhatsAppCheckbox: () => $("label[for='whatsapp']"),
        whatsAppFilteredElements: () => $("div section"),
    };

    async doSearch(value) {
        await this.elements.searchInput().setValue(value);
        await browser.keys("Enter");
    }
}

export default new ReleaseNotesPage();
