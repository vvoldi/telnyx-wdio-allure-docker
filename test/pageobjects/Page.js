export default class Page {
    async open(path='') {
        await browser.url(path);
    }
    get cokiesCloseBtn(){
        return $('button[aria-label="close and deny"]')
    }
    closeCookies(){
        this.cokiesCloseBtn.click()
    }
}
