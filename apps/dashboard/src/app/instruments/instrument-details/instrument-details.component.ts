import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Instrument } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-instrument-details',
  templateUrl: './instrument-details.component.html',
  styleUrls: ['./instrument-details.component.scss']
})
export class InstrumentDetailsComponent {
  selectedInstrument: Instrument;

  @Input() group: FormGroup;
  @Input() set instrument(value: Instrument) {
    this.selectedInstrument = value;
    if(!value) return;
    this.group.patchValue({
      id: value.id,
      name: value.name,
      year: value.year,
      inventor: value.inventor,
      country: value.country,
    });
  }

  @Output() submitted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  submit(directive: NgForm) {
    if ( this.group.value) { 
      this.submitted.emit(this.group.value);
      directive.resetForm();
    }
  }

  cancel() {
    this.cancelled.emit();
  }

  validateField(control: string, directive: NgForm) {
    return this.group.get(control).invalid && directive.submitted;
  }

  determineUpdate() {
    return !!this.group.value.id;
  }
}
