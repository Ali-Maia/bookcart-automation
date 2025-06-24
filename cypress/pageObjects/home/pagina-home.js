import { ELEMENTS } from "./elements";
class HomePage {

  acessarHome(){
    cy.visit('https://bookcart.azurewebsites.net/');
  }

  limparCategoria(){
    cy.get(ELEMENTS.categoriesAll).click();
  }

  selecionarCategoriaBiography(){
    cy.get(ELEMENTS.categoriesBiography).click();
  }

  selecionarCategoriaFiction(){
    cy.get(ELEMENTS.categoriesFiction).click();
  }

  selecionarCategoriaMystery(){
    cy.get(ELEMENTS.categoriesMystery).click();
  }

  selecionarCategoriaFantasy(){
    cy.get(ELEMENTS.categoriesFantasy).click();
  }

  selecionarCategoriaRomance(){
    cy.get(ELEMENTS.categoriesRomance).click();
  }

}

export default HomePage;