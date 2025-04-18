import { gerarUsuario } from "../support/fakerHelper";
import RegisterPage from "../support/register/pagina-register";

describe('', () => {

  const register = new RegisterPage();
  const usuario = gerarUsuario();

  it('', () => {

    cy.intercept('GET', '/api/user/validateUserName/*').as('validateUsername')
    cy.intercept('POST', '/api/user/').as('registerUser')

    register.acessarPaginaRegister();
    register.preencherFirstName(usuario.firstName);
    register.preencherLastName(usuario.lastName);
    register.preencherUserName(usuario.username);

    cy.wait('@validateUsername').then((interception) => {
      expect(interception.request.url).to.include('/api/user/validateUserName/')
      expect(interception.request.url).to.include(usuario.username)
      expect(interception.response.statusCode).to.eq(200)
    })

    register.preencherPassword(usuario.password);
    register.preencherPasswordConfirm(usuario.confirmPassword);
    register.preencherGender(usuario.gender);
    register.clicarRegister();

    cy.wait('@registerUser').then((interception) => {
      expect(interception.request.method).to.eq('POST')
      expect(interception.request.url).to.include('/api/user/')
      expect(interception.response.statusCode).to.eq(200)
    })

    register.validarRegistroComSucesso();
      
  });
  
});