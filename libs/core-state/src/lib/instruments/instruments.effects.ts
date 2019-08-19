import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { InstrumentsState } from './instruments.reducer';
import { 
  InstrumentsActionTypes,
  LoadInstruments,
  InstrumentLoaded,
  AddInstrument,
  InstrumentAdded,
  UpdateInstrument,
  InstrumentUpdated,
  DeleteInstrument,
  InstrumentDeleted
} from './instruments.actions';
import { InstrumentsService, Instrument } from '@second-pass/core-data';

@Injectable()
export class InstrumentsEffects {
  @Effect() loadInstruments$ = this.dataPersistence.fetch(InstrumentsActionTypes.LOAD_INSTRUMENTS, {
      run: (action: LoadInstruments, state: InstrumentsState) => {
        return this.instrumentsService.all().pipe(map((res: Instrument[]) => new InstrumentLoaded(res)));
      },

      onError: (action: LoadInstruments, error) => {
        console.error('Error', error);
      }
    });

  @Effect() addInstrument$ = this.dataPersistence.pessimisticUpdate(InstrumentsActionTypes.ADD_INSTRUMENT, {
    run: (action: AddInstrument, state: InstrumentsState) => {
      return this.instrumentsService.create(action.payload).pipe(map((res: Instrument) => new InstrumentAdded(res)));
    },

    onError: (action: AddInstrument, error) => {
      console.error('Error', error);
    } 
  });

  @Effect() updateInstrument$ = this.dataPersistence.pessimisticUpdate(InstrumentsActionTypes.UPDATE_INSTRUMENT, {
    run: (action: UpdateInstrument, state: InstrumentsState) => {
      return this.instrumentsService.update(action.payload).pipe(map((res: Instrument) => new InstrumentUpdated(res)));
    },

    onError: (action: UpdateInstrument, error) => {
      console.error('Error', error);
    }
  });

  @Effect() deleteInstrument$ = this.dataPersistence.pessimisticUpdate(InstrumentsActionTypes.DELETE_INSTRUMENT, {
    run: (action: DeleteInstrument, state: InstrumentsState) => {
      return this.instrumentsService.delete(action.payload.id).pipe(map(_ => new InstrumentDeleted(action.payload)));
    },

    onError: (action: DeleteInstrument, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<InstrumentsState>,
    private instrumentsService: InstrumentsService
  ) {}
}
