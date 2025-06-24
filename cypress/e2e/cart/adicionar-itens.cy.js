     
  import { CartPage } from '../../pageObjects/cart/pagina-cart';
  
  describe('CN001: Fluxo Principal - Adição de item ao carrinho', () => {
    const cartPage = new CartPage()

    it('Deve adicionar itens e exibir no carrinho', () => {
      
      cartPage.acessarHome();  
      cartPage.adicionarLivro();  

      cartPage.cartIcon().click();  
      cartPage.cartItemByTitle('Harry Potter and the Chamber of Secrets');  
      cartPage.cartItemByTitle('Harry Potter and the Prisoner of Azkaban');
            
    })
  }) 


  
  
