     
  import { CartPage } from '../../pageObjects/cart/pagina-cart';

describe('CN002: Cenário de Exceção - Redirecionamento ao Login ao Finalizar Compra com Itens no Carrinho ', () => {
    const cartPage = new CartPage()

    it('Deve redirecionar o usuário para a tela de login ao tentar finalizar a compra com itens no carrinho sem estar logado', () => {
      
        cartPage.acessarHome();
        cartPage.adicionarLivro(); 
        
        cartPage.cartIcon().click();
        cartPage.checkoutButton().click();      
        cy.url().should('eq', 'https://bookcart.azurewebsites.net/login?returnUrl=%2Fcheckout');
          
    })
  })