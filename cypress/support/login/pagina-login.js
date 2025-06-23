import { ELEMENTS } from "./elements"


class LoginPage {

acessarPaginaLogin(){
    cy.visit('https://bookcart.azurewebsites.net/login');
}

preencherUsername(username){
    cy.get(ELEMENTS.usernameInput).type(username);
}

preencherPassword(password){
    cy.get(ELEMENTS.passwordInput).type(password);
}

verificarMensagemDeErro(){
    cy.get(ELEMENTS.messageError).should('be.visible');
}

enviarFormulário(){
    cy.get(ELEMENTS.loginButton).click();
}

}

export default LoginPage;