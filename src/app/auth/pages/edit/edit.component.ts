// Angular
import { Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

// Services
import { AuthService } from '@auth/services/auth.service';

// Components
import { InputFieldComponent } from '@auth/components/input-field/input-field.component';

// Utils
import { FormUtils } from '@socialex/utils/form-utils';

// Cropper
import { ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';

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
    placeholder: 'Ej: Odontólogo de gallos de pelea',
    formControlName: 'profession',
  },
];

@Component({
  selector: 'app-edit',
  imports: [InputFieldComponent, ReactiveFormsModule],
  templateUrl: './edit.component.html',
})
export default class EditComponent {
  authService = inject(AuthService);
  fb = inject(FormBuilder);

  inputsFields = inputsFields;
  formUtils = FormUtils;

  hasError = signal(false);

  fileInput = viewChild<ElementRef>('fileInput');
  croppedImageFile = signal<File | undefined>(undefined);
  imageChangedEvent: Event | null = null;
  selectedFile = signal<File | undefined>(undefined);
  showCropper = signal(false);
  fileName = computed(
    () => this.croppedImageFile()?.name || this.selectedFile()?.name || 'Click para subir una foto'
  );
  imageCropper = viewChild<ImageCropperComponent | undefined>(ImageCropperComponent);
  croppedImageData: ImageCroppedEvent | null = null;
  croppedImageObjectUrl = signal<string | undefined>(undefined); 

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

  get currentUser() {
    const user = this.authService.getCurrentUser();
    if (!user) throw new Error('No user found');
    return user;
  }

  editForm = this.fb.group(
    {
      email: [
        '',
        [Validators.required, Validators.pattern(this.formUtils.emailPattern)],
        [this.formUtils.checkingServerResponse],
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

    this.editForm.controls['avatar']?.setValue(null);
    this.showCropper.set(false);
    this.croppedImageData = null;

    if (!file) {
      this.editForm.controls['avatar']?.markAsTouched();
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (!file.type.startsWith('image/')) {
      this.editForm.controls['avatar']?.setErrors({invalidFileType: true});
      return;
    }

    if (file.size > maxSize) {
      this.editForm.controls['avatar']?.setErrors({ fileTooBig: true });
      return;
    }

    this.imageChangedEvent = e;
    this.selectedFile.set(file);
    this.showCropper.set(true);
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImageData = event;
  }

  confirmCrop() {
    if (!this.croppedImageData || !this.croppedImageData.blob) {
      this.loadImageFailed();
      return;
    }

    const event = this.croppedImageData;
    const originalNameFile = this.selectedFile()?.name || 'avatar-default.png';

    const croppedFile = new File([event.blob!], originalNameFile, { type: event.blob!.type });
    this.croppedImageObjectUrl.set(URL.createObjectURL(croppedFile));

    this.croppedImageFile.set(croppedFile);
    this.editForm.controls['avatar']?.setValue(croppedFile);
    this.editForm.controls['avatar']?.markAsDirty();
    this.showCropper.set(false);
    this.croppedImageData = null;
  }

  cancelCrop() {
    this.croppedImageData = null;
    this.croppedImageFile.set(undefined);
    this.selectedFile.set(undefined);
    this.editForm.controls['avatar']?.setValue(null);
    this.showCropper.set(false);

    if (this.croppedImageObjectUrl()) {
      URL.revokeObjectURL(this.croppedImageObjectUrl()!);
    }
    this.croppedImageObjectUrl.set(undefined);

    const inputRef = this.fileInput()?.nativeElement;
    if (inputRef) inputRef.value = '';
  }

  loadImageFailed() {
    this.editForm.controls['avatar']?.setErrors({ loadFailed: true });
    this.showCropper.set(false);
  }
}