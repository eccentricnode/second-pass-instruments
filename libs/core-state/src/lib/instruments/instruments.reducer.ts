import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Instrument } from '@second-pass/core-data';
import { InstrumentsAction, InstrumentsActionTypes } from './instruments.actions';

export interface InstrumentsState extends EntityState<Instrument> {
  selectedInstrumentId: string | null;
}
  
export const adapter: EntityAdapter<Instrument> = createEntityAdapter<Instrument>();
export const initialState: InstrumentsState = adapter.getInitialState({
  selectedInstrumentId: null,
});

export function instrumentsReducer(state: InstrumentsState = initialState, action: InstrumentsAction): InstrumentsState {
  switch (action.type) {
    case InstrumentsActionTypes.INSTRUMENT_SELECTED: {
      return Object.assign({}, state, { selectedInstrumentId: action.payload });
    }

    case InstrumentsActionTypes.INSTRUMENT_LOADED: {
      return adapter.upsertMany(action.payload, state);
    }

    case InstrumentsActionTypes.INSTRUMENT_ADDED: {
      return adapter.addOne(action.payload, state);
    }

    case InstrumentsActionTypes.INSTRUMENT_UPDATED: {
      return adapter.upsertOne(action.payload, state);
    }

    case InstrumentsActionTypes.INSTRUMENT_DELETED: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedInstrument = (state: InstrumentsState) => state.selectedInstrumentId;

// get the selectors...

export const {
  selectIds: selectInstrumentIds,
  selectEntities: selectInstrumentEntities,
  selectAll: selectAllInstruments,
  selectTotal: selectInstrumentTotal
} = adapter.getSelectors(); 