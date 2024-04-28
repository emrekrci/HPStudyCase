

class HeaderContainer {
    
    searchProduct(input){
        //click search input before typing to change itself to combobox.
        cy.get("div[class = 'searchBoxOld-P2GCKq3V7DvEXIgWsSCP']").click();
        //type input 
        cy.get("input[class = 'theme-IYtZzqYPto8PhOx3ku3c']").type(input);
        //click ARA button
        cy.get("div[class = 'searchBoxOld-yDJzsIfi_S5gVgoapx6f']").click();
    }
    
}

export const headerPage = new HeaderContainer();