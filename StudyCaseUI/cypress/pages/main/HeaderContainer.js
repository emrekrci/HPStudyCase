import BasePage from "../BasePage";

class HeaderContainer extends BasePage {
    constructor(){
        super();
        this.searchInput = cy.get("input[placeholder = 'Ürün, kategori veya marka ara']")
        this.searchButton = cy.get("div:contains('ARA')")
    }

    search(input){
        this.searchInput.type("iphone");
        this.searchButton.click();
    }
}

export default HeaderContainer;