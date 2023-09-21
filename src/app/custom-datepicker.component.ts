import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'custom-date-picker',
  template: ` <ng-container [formGroup]="outerFormGroup">
    <mat-form-field>
      <mat-label>Date field</mat-label>
      <input
        matInput
        type="text"
        formControlName="plannedDestructionDate"
        [matDatepicker]="picker"
        [min]="minToday ? today : defaultMinDate"
      />
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
      <mat-error *ngIf="hasError()">Enter a valid date!</mat-error>
    </mat-form-field>
  </ng-container>`,
})
export class CustomDatePickerComponent implements OnInit {
  @Input()
  minToday: boolean = false;

  readonly defaultMinDate = new Date(1900, 0, 1);
  readonly today = new Date();
  outerFormGroup!: UntypedFormGroup;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.outerFormGroup = this.controlContainer.control as UntypedFormGroup;
  }

  hasError() {
    return this.outerFormGroup?.controls['plannedDestructionDate'].invalid;
  }
}
