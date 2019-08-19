import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Instrument } from '@second-pass/core-data';
import { InstrumentsFacade } from '@second-pass/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'second-pass-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.scss']
})
export class InstrumentsComponent implements OnInit {
  form: FormGroup;
  instruments$: Observable<Instrument[]> = this.instrumentsFacade.allInstruments$;
  selectedInstrument$: Observable<Instrument> = this.instrumentsFacade.selectedInstrument$;

  constructor(
    private instrumentsFacade: InstrumentsFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.instrumentsFacade.loadInstruments();
    this.initForm();
    this.instrumentsFacade.mutations$.subscribe(_ => this.reset());
    this.reset();
  }

  selectInstrument(instrument) {
    this.instrumentsFacade.selectInstrument(instrument.id);
  }

  saveInstrument(instrument: Instrument) {
    instrument.id ? this.instrumentsFacade.updateInstrument(instrument) : this.instrumentsFacade.createInstrument(instrument);
  }

  removeInstrument(instrument) {
    this.instrumentsFacade.deleteInstrument(instrument);
  }

  reset() {
    this.form.reset();
    this.selectInstrument({id: null});
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null, 
      name: ['', Validators.compose([Validators.required])],
      year: ['', Validators.compose([Validators.required])],
      inventor: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
    });
  }
}
