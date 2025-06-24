     
import { CartPage } from '../../pageObjects/cart/pagina-cart';
import HomePage from '../../pageObjects/home/pagina-home';

describe('CN003: Fluxo Alternativo - Limpar Carrinho Antes da Compra', () => {
    const cartPage = new CartPage()
    const home = new HomePage

    it('Deve permitir que o usuário limpe o carrinho antes de finalizar a compra', () => {
      
      home.acessarHome();
      cartPage.adicionarLivro(); 
           
      cartPage.cartIcon().click();
      cartPage.clearCartButton().click();
      cartPage.emptyCartMessage().should('be.visible');
      
    })
  })