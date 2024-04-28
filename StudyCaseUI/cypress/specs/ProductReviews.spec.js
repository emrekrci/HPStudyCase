import HeaderContainer, { headerPage } from "../pages/HeaderContainer";
import SearchResultPage, { searchResultPage } from "../pages/SearchResultPage";
import ProductDetails, { productDetailsPage } from "../pages/ProductDetails";
import { secureAccessPAge as secureAccessPage } from "../pages/SecureAccessPage";
require ('cypress-iframe')



describe('Reviews Test Cases', () => {

    before(() => {
        cy.visit("/", {failOnStatusCode: false});
        secureAccessPage.skipSecureAccessPage();
    })

    it('Click Positive Button in Reviews and Validate Thanks Message', () => {        
        headerPage.searchProduct("iphone");
        searchResultPage.clickProductWithIndex(1,10);
        productDetailsPage.clickReviewsTab();
        
        //get reviews length to check are there any reviews on the page. 
        //If there is no reviews will not do any.
        if(productDetailsPage.getReviewsCount > 0){
            productDetailsPage.clickPositiveAndValidate();
        }

    })
})