import { ELEMENTS } from "./elements";

class RegisterPage {

  acessarPaginaRegister(){
    cy.visit('https://bookcart.azurewebsites.net/register');
  }

  preencherFirstName(firstName) {
    cy.get(ELEMENTS.firstNameInput).type(firstName);
  }

  preencherLastName(lastName) {
    cy.get(ELEMENTS.lastNameInput).type(lastName);
  }

  preencherUserName(usertName) {
    cy.get(ELEMENTS.userNameInput).type(usertName);
  }

  preencherPassword(password) {
    cy.get(ELEMENTS.passwordInput).type(password);
  }

  preencherPasswordConfirm(passwordConfirm) {
    cy.get(ELEMENTS.passwordConfirmInput).type(passwordConfirm);
  }

  preencherGender(gender) {
    cy.get(ELEMENTS.genderInput(gender)).check();
  }

  clicarRegister() {
    cy.get(ELEMENTS.registerButton[0]).contains(ELEMENTS.registerButton[1]).click();
  }

  validarRegistroComSucesso(){
    cy.get(ELEMENTS.successMessage[0]).contains(ELEMENTS.successMessage[1]).should('be.visible');
  }

}

export default RegisterPage;
