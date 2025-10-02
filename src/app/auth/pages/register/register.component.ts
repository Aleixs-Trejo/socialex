// Angular
import { DatePipe, NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormErrorLabelComponent } from '@auth/components/form-error-label/form-error-label.component';
import { InputFieldComponent } from '@auth/components/input-field/input-field.component';
import { AuthService } from '@auth/services/auth.service';

// Utils
import { FormUtils } from '@socialex/utils/form-utils';

const inputsFields = [
  {
    title: 'Correo electrónico',
    type: 'email',
    icon: 'assets/icon/icon-email.svg',
    placeholder: 'Ej: alesis@mail.xd',
    formControlName: 'email',
  },
  {
    title: 'Nombre de usuario',
    type: 'text',
    icon: 'assets/icon/icon-user.svg',
    placeholder: 'Ej: Alesis Makanaki',
    formControlName: 'name',
  },
  {
    title: 'Contraseña',
    type: 'password',
    icon: 'assets/icon/icon-key.svg',
    placeholder: 'Ej: ****** XD',
    formControlName: 'password',
  },
  {
    title: 'Confirmar contraseña',
    type: 'password',
    icon: 'assets/icon/icon-key.svg',
    placeholder: 'Ej: ****** XD',
    formControlName: 'password2',
  },
  {
    title: 'Profesión',
    type: 'text',
    icon: 'assets/icon/icon-work.svg',
    placeholder: 'Ej: Odontologo de gallos de pelea',
    formControlName: 'profession',
  },
];

@Component({
  selector: 'app-register',
  imports: [
    RouterLink,
    DatePipe,
    ReactiveFormsModule,
    FormErrorLabelComponent,
    NgClass,
    InputFieldComponent,
  ],
  templateUrl: './register.component.html',
})
export default class RegisterComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  formUtils = FormUtils;
  inputsFields = inputsFields;

  hasError = signal(false);

  selectedFile = signal<File | undefined>(undefined);
  fileName = computed(
    () => this.selectedFile()?.name || 'Click para subir una foto'
  );

  birthDate = signal<Date | null>(null);
  maxBirhDate = signal<Date>(new Date());
  minBirthDate = computed(() => {
    const today = new Date();
    const date18YearsAgo = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );
    return date18YearsAgo;
  });

  dateChange(e: Event) {
    const date = new Date((e.target as HTMLInputElement).value);
    this.birthDate.set(date);
  }

  registerForm = this.fb.group(
    {
      email: [
        '',
        [Validators.required, Validators.pattern(this.formUtils.emailPattern)],
      ],
      name: [
        '',
        [Validators.required, Validators.pattern(this.formUtils.namePattern)],
      ],
      password: ['', [Validators.required, Validators.minLength(4)]],
      password2: ['', [Validators.required, Validators.minLength(4)]],
      profession: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      birthdate: this.fb.control<Date | null>(null, [Validators.required]),
      avatar: this.fb.control<File | null>(null, [Validators.required]),
    },
    {
      validators: this.formUtils.matchPasswordsValidator(
        'password',
        'password2'
      ),
    }
  );

  fileChange(e: Event) {
    const fileList = (e.target as HTMLInputElement).files;
    const file = fileList?.length ? fileList[0] : null;

    if (!file) {
      this.selectedFile.set(undefined);
      this.registerForm.controls['avatar']?.setValue(null);
      this.registerForm.controls['avatar']?.markAsTouched();
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (!file.type.startsWith('image/')) {
      this.registerForm.controls['avatar']?.setErrors({
        invalidFileType: true,
      });
      this.selectedFile.set(undefined);
      return;
    }

    if (file.size > maxSize) {
      this.registerForm.controls['avatar']?.setErrors({ fileTooBig: true });
      this.selectedFile.set(undefined);
      return;
    }

    this.selectedFile.set(file);
    this.registerForm.controls['avatar']?.setValue(file);
    this.registerForm.controls['avatar']?.markAsTouched();

    this.registerForm.controls['avatar']?.markAsTouched();
  }

  async onSubmit() {
    this.registerForm.markAllAsTouched();

    if (this.registerForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => this.hasError.set(false), 2000);
      return;
    }

    const { avatar, ...userPayload } = this.registerForm.value as any;

    if (userPayload.birthDate instanceof Date) {
      userPayload.birthDate = userPayload.birthDate.toISOString();
    }

    const result = await this.authService.register(
      userPayload,
      this.selectedFile()
    );
    if (result) {
      this.router.navigateByUrl('/socialex/home');
      return;
    }
  }
}
