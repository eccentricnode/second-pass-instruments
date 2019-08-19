import { Action } from '@ngrx/store';

import { Instrument } from '@second-pass/core-data';

export enum InstrumentsActionTypes {
  INSTRUMENTS_ACTION  = '[INSTRUMENTS] Instruments Action',
  INSTRUMENT_SELECTED = '[INSTRUMENTS] Instrument Selected',
  LOAD_INSTRUMENTS    = '[INSTRUMENTS] Load Instruments',
  INSTRUMENT_LOADED   = '[INSTRUMENTS] Instrument Loaded',
  ADD_INSTRUMENT      = '[INSTRUMENTS] Add Instrument',
  INSTRUMENT_ADDED    = '[INSTRUMENTS] Instruments Added',
  UPDATE_INSTRUMENT   = '[INSTRUMENTS] Update Instrument',
  INSTRUMENT_UPDATED  = '[INSTRUMENTS] Instrument Updated',
  DELETE_INSTRUMENT   = '[INSTRUMENTS] Delete Instrument',
  INSTRUMENT_DELETED  = '[INSTRUMENTS] Instrument Deleted',
}

export class Instruments implements Action {
  readonly type = InstrumentsActionTypes.INSTRUMENTS_ACTION;
}

export class InstrumentSelected implements Action {
  readonly type = InstrumentsActionTypes.INSTRUMENT_SELECTED;
  constructor(public payload) { }
}

export class LoadInstruments implements Action {
  readonly type = InstrumentsActionTypes.LOAD_INSTRUMENTS;
  constructor() { }
}

export class InstrumentLoaded implements Action {
  readonly type = InstrumentsActionTypes.INSTRUMENT_LOADED;
  constructor(public payload: Instrument[]) { }
}

export class AddInstrument implements Action {
  readonly type = InstrumentsActionTypes.ADD_INSTRUMENT;
  constructor(public payload: Instrument) { }
}

export class InstrumentAdded implements Action {
  readonly type = InstrumentsActionTypes.INSTRUMENT_ADDED;
  constructor(public payload: Instrument) { }
}

export class UpdateInstrument implements Action {
  readonly type = InstrumentsActionTypes.UPDATE_INSTRUMENT;
  constructor(public payload: Instrument) { }
}

export class InstrumentUpdated implements Action {
  readonly type = InstrumentsActionTypes.INSTRUMENT_UPDATED;
  constructor(public payload: Instrument) { }
}

export class DeleteInstrument implements Action {
  readonly type = InstrumentsActionTypes.DELETE_INSTRUMENT;
  constructor(public payload: Instrument) { }
}

export class InstrumentDeleted implements Action {
  readonly type = InstrumentsActionTypes.INSTRUMENT_DELETED;
  constructor(public payload: Instrument) { }
}

export type InstrumentsAction = Instruments
  | InstrumentSelected
  | LoadInstruments
  | InstrumentLoaded
  | AddInstrument
  | InstrumentAdded
  | UpdateInstrument
  | InstrumentUpdated
  | DeleteInstrument
  | InstrumentDeleted
;