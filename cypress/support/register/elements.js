export const ELEMENTS = {

  firstNameInput : '#mat-input-0',
  lastNameInput : '#mat-input-1',
  userNameInput: '#mat-input-2',
  passwordInput: '#mat-input-3',
  passwordConfirmInput: '#mat-input-4',
  genderInput: (gender) => `input[type="radio"][value="${gender}"]`,
  registerButton: ['button', 'Register'],
  successMessage: ['.mdc-snackbar__surface','Registration successful'],

  loginButton : ['button', 'Login'], // tem esse elemento na tela, mas n sei se precisa dele

}