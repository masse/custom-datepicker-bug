import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `<div>
      Datepicker with an min validator and initially invalid (min) formvalue
      value cases ExpressionHasChanged exception when initialized.
    </div>

    <form [formGroup]="formGroup">
      <custom-date-picker [minToday]="true"></custom-date-picker>
    </form>`,
})
export class AppComponent {
  formGroup: UntypedFormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      plannedDestructionDate: ['2020-11-02'],
    });
  }
}
