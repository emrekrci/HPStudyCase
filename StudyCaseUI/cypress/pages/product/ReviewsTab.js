import ProductDetails from "./ProductDetails";

class ReviewsTab extends ProductDetails{
    constructor(){
        this.reviewsList = cy.get('div[class=paginationContentHolder"]')
        this.thanksText = cy.get('div[class="hermes-ReviewCard-module-QA5PqdPP5EhkpY_vptfv"]')
    }
}

export default ReviewsTab;