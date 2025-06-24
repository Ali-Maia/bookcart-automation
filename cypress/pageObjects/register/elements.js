export const ELEMENTS = {

  firstNameInput : '#mat-input-0',
  lastNameInput : '#mat-input-1',
  userNameInput: '#mat-input-2',
  passwordInput: '#mat-input-3',
  passwordConfirmInput: '#mat-input-4',
  genderInput: (gender) => `input[type="radio"][value="${gender}"]`,
  registerButton: ['button', 'Register'],
  successMessage: ['.mdc-snackbar__surface','Registration successful'],
  failedFirstName: ['.ng-tns-c508571215-1','First name'],
  failedMessagePassword: '#mat-mdc-error-0',

  loginButton : ['button', 'Login'], // tem esse elemento na tela, mas n sei se precisa dele

}