import Page from "./Page";

export class BlogPage extends Page {
    open(path) {
        return super.open(path);
    }
    elements = {
        searchInput: () => $("#search"),
    };

    async doSearch(value){
        await this.elements.searchInput().setValue(value)
        await browser.keys('Enter')
    }
}

export default new BlogPage();
