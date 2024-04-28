class BasePage {
    constructor(){
        
    }

    navigate(path){
        return cy.visit(path)
    }
}

export default BasePage;