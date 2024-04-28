import BasePage from "../BasePage";

class ProductDetails extends BasePage {
    constructor(){
        this.reviewTabButton = cy.get('#reviewsTabTrigger');
    }
}

export default ProductDetails;