function acessarHome() {
    cy.log("ACESSANDO A TELA PRINCIPAL");
    cy.visit('https://bookcart.azurewebsites.net/');
    cy.contains('Book Cart').should('be.visible');
    cy.get('.mdc-button.mdc-button--unelevated').contains('Book Cart').should('be.visible');  
  }
  
  function adicionarLivro() {
  
    cy.get('span.mdc-button__label') // Elementos do carringo estão nessa classe
    .filter((i, el) => el.textContent.trim() === 'Add to Cart') // filtra todos os span com "Add to Cart"
    .should('have.length.at.least', 2) //garante que pelo 2 elementos estejam na tela 
    .then(($spans) => { // quando a verificação acima for satisfeita ele executa o bloquinho abaixo
      cy.wrap($spans[0]).closest('button').wait(1000).click(); //Clica no botão pai do primeiro span com texto "Add to Cart"
      cy.wrap($spans[1]).closest('button').wait(1000).click(); //Clica no botão pai do primeiro span com texto "Add to Cart"      
    });
  }
  
  function acessarCarrinho() {
  
    cy.get('mat-icon').contains('shopping_cart').closest('button').click();
  }
  
  
  describe('CN001: Cenário Principal - Adição de item ao carrinho', () => {
    it('Deve adicionar itens e exibir no carrinho', () => {
      
      acessarHome();
      adicionarLivro();
      acessarCarrinho();    
      
      cy.get('table').contains('td', 'Harry Potter and the Chamber of Secrets').should('be.visible');
      cy.get('table').contains('td', 'Harry Potter and the Prisoner of Azkaban').should('be.visible');
      cy.wait(5000);
      
    })
  })
  
  describe('CN002: Cenário de Exceção - Redirecionamento ao Login ao Finalizar Compra com Itens no Carrinho', () => {
    it('Deve redirecionar o usuário para a tela de login ao tentar finalizar a compra com itens no carrinho sem estar logado', () => {
      
      acessarHome();
      adicionarLivro();
      acessarCarrinho(); 
      
      cy.get('mat-icon').contains('shopping_cart').closest('button').wait(3000).click();
      cy.get('span.mdc-button__label').contains('CheckOut').closest('button').wait(3000).click();
      cy.url().should('eq', 'https://bookcart.azurewebsites.net/login?returnUrl=%2Fcheckout');
      cy.wait(5000);
      
      
    })
  })
  
  describe('CN002: Cenário de Exceção - Redirecionamento ao Login ao Finalizar Compra com Itens no Carrinho', () => {
    it('Deve redirecionar o usuário para a tela de login ao tentar finalizar a compra com itens no carrinho sem estar logado', () => {
      
      acessarHome();
      adicionarLivro();
      acessarCarrinho();
      
      cy.get('span.mdc-button__label').contains('CheckOut').closest('button').wait(3000).click();
      cy.url().should('eq', 'https://bookcart.azurewebsites.net/login?returnUrl=%2Fcheckout');
      cy.wait(5000);
          
    })
  })
  
  describe('CN003: Fluxo Alternativo - Limpar Carrinho Antes da Compra', () => {
    it('Deve permitir que o usuário limpe o carrinho antes de finalizar a compra', () => {
      
      acessarHome();
      adicionarLivro();
      acessarCarrinho();
      
      cy.get('span.mdc-button__label').contains('Clear cart').closest('button').wait(3000).click();
      cy.contains('Your shopping cart is empty.').should('be.visible');
      cy.wait(5000);   
      
    })
  })
