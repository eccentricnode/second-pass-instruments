import { Injectable } from '@angular/core';

import { filter } from 'rxjs/operators';
import { select, Store, ActionsSubject } from '@ngrx/store';

import { selectAllInstruments, selectCurrentInstrument } from './instruments.selectors';
import { Instrument } from '@second-pass/core-data';
import { InstrumentsState } from './instruments.reducer';
import * as InstrumentsActions from './instruments.actions';
import { InstrumentsActionTypes } from './instruments.actions';

@Injectable()
export class InstrumentsFacade {
  allInstruments$ = this.store.pipe(select(selectAllInstruments));
  selectedInstruments$ = this.store.pipe(select(selectCurrentInstrument));

  mutations$ = this.actions$
    .pipe(
      filter(action =>
        action.type === InstrumentsActionTypes.ADD_INSTRUMENT
        || action.type === InstrumentsActionTypes.UPDATE_INSTRUMENT
        || action.type === InstrumentsActionTypes.DELETE_INSTRUMENT
      )
    );

  constructor(
    private store: Store<InstrumentsState>,
    private actions$: ActionsSubject
  ) {}

  selectInstrument(instrumentId: string) {
    this.store.dispatch(new InstrumentsActions.InstrumentSelected(instrumentId));
  }

  loadInstruments() {
    this.store.dispatch(new InstrumentsActions.LoadInstruments());
  }

  createInstrument(instrument: Instrument) {
    this.store.dispatch(new InstrumentsActions.AddInstrument(instrument));
  }

  updateInstrument(instrument: Instrument) {
    this.store.dispatch(new InstrumentsActions.UpdateInstrument(instrument));
  }

  deleteInstrument(instrument: Instrument) {
    this.store.dispatch(new InstrumentsActions.DeleteInstrument(instrument));
  }
}
