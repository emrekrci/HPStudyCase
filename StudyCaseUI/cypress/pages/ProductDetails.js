
class ProductDetails {

    clickReviewsTab(){
        cy.get('#reviewsTabTrigger').scrollIntoView().click();
    }

    getReviewsCount(){
        cy.get('div[class=paginationContentHolder"]').find("div").its('length').then((count) => {
            return count;
        })
    }

    clickPositiveAndValidate(){
        cy.get('div[class=paginationContentHolder"]').first().get("div[class='hermes-ReviewCard-module-PbSfiSWIgfswGGBaOrw7']").click();
        cy.get('div[class="hermes-ReviewCard-module-QA5PqdPP5EhkpY_vptfv"]').should('contain', "Teşekkür Ederiz.")
    }
    
}

export const productDetailsPage = new ProductDetails();