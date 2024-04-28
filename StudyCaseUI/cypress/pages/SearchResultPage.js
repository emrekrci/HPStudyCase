
class SearchResultPage{

    clickProductWithIndex(listIndex, itemIndex){
        //removing target attribute to disable opening new tab and keep going with same tab on browser. 
        cy.get('div[data-test-id="loader-false"]').get(`div > div > ul:nth-child(${listIndex}) > li:nth-child(${itemIndex}) > div > a`).invoke("removeAttr", "target").click();
    }
    
}

export const searchResultPage = new SearchResultPage();