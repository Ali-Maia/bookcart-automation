import HomePage from '../../pageObjects/home/pagina-home';

describe('', () => {
 const home = new HomePage;

 beforeEach(() => {
    cy.intercept('GET', '/api/book').as('bookRequest');
    cy.intercept('GET', '/api/book/GetCategoriesList').as('categoriesRequest');

    home.acessarHome();
    
    cy.wait('@bookRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
    cy.wait('@categoriesRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

  });
  it('CT201 : Filtro por categoria "Fiction"', () => {
    home.selecionarCategoriaFiction();
    cy.url().should('include','fiction');
  });

  it.only('CT202 : Persistência do filtro após reload da página', () => {
    home.selecionarCategoriaMystery();
    cy.url().should('include','mystery');
    cy.reload();
    cy.url().should('include','mystery');
  });

});