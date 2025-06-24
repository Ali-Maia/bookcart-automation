     
  import { CartPage } from '../../pageObjects/cart/pagina-cart';
  import HomePage from '../../pageObjects/home/pagina-home';
  
  
  describe('CN001: Fluxo Principal - Adição de item ao carrinho', () => {
    const cartPage = new CartPage()
    const home = new HomePage

    it('Deve adicionar itens e exibir no carrinho', () => {
      
      home.acessarHome(); 
      cartPage.adicionarLivro();  

      cartPage.cartIcon().click();  
      cartPage.cartItemByTitle('Harry Potter and the Chamber of Secrets');  
      cartPage.cartItemByTitle('Harry Potter and the Prisoner of Azkaban');
            
    })
  }) 


  
  
