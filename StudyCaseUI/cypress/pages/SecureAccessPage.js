
class SecureAccessPage {
    //skipping not secure access page with clicking the Hepsiburada banner.
    skipSecureAccessPage(){
        cy
        .get("#content > iframe")
        .its("0.contentDocument")
        .its("body").should("not.be.undefined")
        .then(cy.wrap).find("a").first().should("be.visible").click({force:true});
        //getIframeBody().find("a").first().should('be.visible').click({force:true});
        cy.wait(10000)
    }
}

export const secureAccessPAge = new SecureAccessPage();