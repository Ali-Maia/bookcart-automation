     
import { CartPage } from '../../support/cart/pagina-cart';

describe('CN003: Fluxo Alternativo - Limpar Carrinho Antes da Compra', () => {
    const cartPage = new CartPage()

    it('Deve permitir que o usuário limpe o carrinho antes de finalizar a compra', () => {
      
      cartPage.acessarHome();
      cartPage.adicionarLivro(); 
           
      cartPage.cartIcon().click();
      cartPage.clearCartButton().click();
      cartPage.emptyCartMessage().should('be.visible');
      
    })
  })