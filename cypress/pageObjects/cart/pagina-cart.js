import { SELECTORS } from "./elements";

export class CartPage {
    
    adicionarLivro() {
        cy.get(SELECTORS.addCartButton[0]) // Elementos do carringo estão nessa classe
        .filter((i, el) => el.textContent.trim() === SELECTORS.addCartButton[1]) // filtra todos os span com "Add to Cart"
        .should('have.length.at.least', 2) //garante que pelo 2 elementos estejam na tela 
        .then(($spans) => { // quando a verificação acima for satisfeita ele executa o bloquinho abaixo
          cy.wrap($spans[0]).closest(SELECTORS.addCartButton[2]).wait(1000).click(); //Clica no botão pai do primeiro span com texto "Add to Cart"
          cy.wrap($spans[1]).closest(SELECTORS.addCartButton[2]).wait(1000).click();      
        });
      }

     cartIcon() {
        return cy.get(SELECTORS.buttonCart[0]).contains(SELECTORS.buttonCart[1]).closest(SELECTORS.buttonCart[2]);
     }
  
     checkoutButton() {
        return cy.get(SELECTORS.checkoutButton[0]).contains(SELECTORS.checkoutButton[1]).closest(SELECTORS.checkoutButton[2]);
     }
   
     clearCartButton() {
        return cy.get(SELECTORS.clearCartButton[0]).contains(SELECTORS.clearCartButton[1]).closest(SELECTORS.clearCartButton[2])
     }
   
     cartTable() {  
        return cy.get(SELECTORS.cartTable)
     }
   
     cartItemByTitle(title) {
        return cy.get(SELECTORS.cartTable).contains(SELECTORS.cartItemCell, title).should('be.visible')
     }
   
     emptyCartMessage() { 
        return cy.contains(SELECTORS.emptyCartMessage)
    }
   
     deleteItemByTitle(title) {
        return cy.get(SELECTORS.cartTable)
         .contains(SELECTORS.cartItemCell, title)
         .parent()
         .within(() => {
           cy.get(SELECTORS.deleteItemButton).click();
         })
    }
}


