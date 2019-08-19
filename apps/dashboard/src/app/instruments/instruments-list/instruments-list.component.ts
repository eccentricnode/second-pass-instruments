import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Instrument } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-instruments-list',
  templateUrl: './instruments-list.component.html',
  styleUrls: ['./instruments-list.component.scss']
})
export class InstrumentsListComponent {
  @Input() instruments: Instrument[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  select(instrument: Instrument) {
    this.selected.emit(instrument);
  }

  remove(instrument: string) {
    this.deleted.emit(instrument);
  }
}
