// Angular
import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

// Utils
import { FormUtils } from '@socialex/utils/form-utils';

// Components
import { FormErrorLabelComponent } from '../form-error-label/form-error-label.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

interface InputField {
  title: string;
  type: string;
  icon: string;
  placeholder: string;
  formControlName: string;
}

@Component({
  selector: 'input-field',
  imports: [NgClass, FormErrorLabelComponent, ReactiveFormsModule],
  templateUrl: './input-field.component.html',
})
export class InputFieldComponent {
  inputField = input.required<InputField>();
  formInput = input.required<FormGroup>();
  formUtils = FormUtils;
}
