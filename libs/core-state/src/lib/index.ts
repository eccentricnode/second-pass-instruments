import { ActionReducerMap } from '@ngrx/store';

import * as fromInstruments from './instruments/instruments.reducer';

export interface AppState  {
    instruments: fromInstruments.InstrumentsState;
}

export const reducers: ActionReducerMap<AppState> = {
    instruments: fromInstruments.instrumentsReducer,
}