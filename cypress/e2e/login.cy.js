import LoginPage from '../pageObjects/login/pagina-login';

describe('Validar o funcionamento da tela de login', () => {

  const login = new LoginPage;
  let user;

  before(() => {
    cy.fixture('usuarios').then((usuariosData) => {
      user = usuariosData;
    });
  });

  beforeEach(() => {

    login.acessarPaginaLogin();
    cy.intercept('POST','/api/login').as('loginRequest');
    
  });

  it('CT101 : Login com dados válidos', () => {
    const primeiroUsuario = user[0];

    login.preencherUsername(primeiroUsuario.username);
    login.preencherPassword(primeiroUsuario.password);
    login.enviarFormulário();

    cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body).to.not.be.null;
      expect(interception.response.body).to.have.property('token');
    });
    
  });

  it('CT201 : Login com dados inválidos', () => {
    const segundoUsuario = user[1];

    login.preencherUsername(segundoUsuario.username);
    login.preencherPassword(segundoUsuario.password);
    login.enviarFormulário();

    cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(401);
    });

    login.verificarMensagemDeErro();
  });
  
});