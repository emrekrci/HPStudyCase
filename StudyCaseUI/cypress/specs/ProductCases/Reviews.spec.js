import HeaderContainer from "../../pages/main/HeaderContainer";
import SearchResultPage from "../../pages/SearchResultPage";
import ProductDetails from "../../pages/product/ProductDetails";
import ReviewsTab from "../../pages/product/ReviewsTab";


describe('Reviews Test Cases', () => {
    before(() => {
        cy.visit("/", {
            failOnStatusCode:false})
    })
    it('Click Positive Button in Reviews', () => {        
        const header = new HeaderContainer();
        const resultPage = new SearchResultPage();
        const productDetails = new ProductDetails();
        const reviewTab = new ReviewsTab();

        header.search("iphone");
        resultPage.clickProduct(1,10);
        productDetails.reviewTabButton.scrollIntoView().click();
        if(reviewTab.reviewsList.find("div").count() > 0){
            reviewTab.reviewsList.first().get("div[class='hermes-ReviewCard-module-PbSfiSWIgfswGGBaOrw7']").click();
            reviewTab.thanksText.should('contain', "Teşekkür Ederiz.")
        }
    })
})