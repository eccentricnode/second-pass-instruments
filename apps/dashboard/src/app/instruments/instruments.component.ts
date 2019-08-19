import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  }

}
