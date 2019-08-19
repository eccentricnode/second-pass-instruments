import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromInstruments from './instruments.reducer';
import { emptyInstrument } from '@second-pass/core-data';

// Lookup the 'Instruments' feature state managed by NgRx
export const selectInstrumentsState = createFeatureSelector<fromInstruments.InstrumentsState>('instruments');

export const selectInstrumentIds = createSelector(
  selectInstrumentsState,
  fromInstruments.selectInstrumentIds
);

export const selectInstrumentEntities = createSelector(
  selectInstrumentsState,
  fromInstruments.selectInstrumentEntities
);

export const selectAllInstruments = createSelector(
  selectInstrumentsState,
  fromInstruments.selectAllInstruments
);

export const selectCurrentInstrumentId = createSelector(
  selectInstrumentsState,
  fromInstruments.getSelectedInstrument
);

export const selectCurrentInstrument = createSelector(
  selectInstrumentEntities,
  selectCurrentInstrumentId,
  (instrumentId, instrumentEntities) => {
    instrumentId ? instrumentEntities[instrumentId] : Object.assign({}, emptyInstrument)
  }
);
