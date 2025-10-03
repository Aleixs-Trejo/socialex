import { Component, input } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormUtils } from '@socialex/utils/form-utils';

@Component({
  selector: 'form-error-label',
  imports: [],
  templateUrl: './form-error-label.component.html',
})
export class FormErrorLabelComponent {
  controlForm = input<FormGroup>();
  fieldName = input<string>();
  formUtils = FormUtils;

  get errorMessage() {
    const form = this.controlForm();
    const fieldName = this.fieldName();

    if (!form || !fieldName) return null;

    const control = form.controls[fieldName];
    if (!control) return null;

    const errors: ValidationErrors = control.errors || {};
    return control.touched && errors ? FormUtils.getTextError(errors) : null;
  }
}