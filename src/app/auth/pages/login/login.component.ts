// Angular
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

// Services
import { AuthService } from '@auth/services/auth.service';

// Utils
import { FormUtils } from '@socialex/utils/form-utils';

// Components
import { InputFieldComponent } from '@auth/components/input-field/input-field.component';

const inputsFields = [
  {
    title: 'Correo electrónico',
    type: 'email',
    icon: 'assets/icon/icon-email.svg',
    placeholder: 'Ej: alesis@mail.xd',
    formControlName: 'email',
  },
  {
    title: 'Contraseña',
    type: 'password',
    icon: 'assets/icon/icon-key.svg',
    placeholder: 'Ej: ****** XD',
    formControlName: 'password',
  },
];

@Component({
  selector: 'app-login',
  imports: [InputFieldComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
})
export default class LoginComponent {
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  router = inject(Router);

  inputsFields = inputsFields;
  formUtils = FormUtils;

  hasError = signal(false);

  loginForm = this.fb.group({
    email: [
      '',
      [Validators.required, Validators.pattern(this.formUtils.emailPattern)],
    ],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  async onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return this.throwError();

    const { email = '', password = '' } = this.loginForm.value;
    const result = await this.authService.login(email!, password!);
    if (!result) return this.throwError();
    this.router.navigateByUrl('/socialex/home');
    return;
  }

  throwError() {
    this.hasError.set(true);
    setTimeout(() => this.hasError.set(false), 3000);
    return;
  }
}
