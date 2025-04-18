import { faker } from '@faker-js/faker';

export function gerarUsuario(){
  const numberSenha = Math.random().toFixed(6);
  const stringSenha = faker.person.firstName();

  //quebrar senha em 3 partes
  const senha = stringSenha.concat(numberSenha)
  const genero = faker.helpers.arrayElement(['Male', 'Female'])

  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: senha,
    confirmPassword: senha,
    gender: genero, 
  }
}