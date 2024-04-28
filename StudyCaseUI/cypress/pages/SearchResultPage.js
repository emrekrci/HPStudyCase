import BasePage from "./BasePage";

class SearchResultPage extends BasePage {
    constructor(){
        super();
        this.productVoltrenList = cy.get('div[data-test-id="loader-false"]')
    }

    clickProduct(listIndex, itemIndex){
        this.productVoltrenList.get(`div > div > ul:nth-child(${listIndex}) > li:nth-child(${itemIndex}) > a`).invoke("removeAttr", "target").click();
    }
}

export default SearchResultPage;