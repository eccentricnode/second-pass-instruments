import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NxModule } from '@nrwl/angular';
import { CoreDataModule } from '@second-pass/core-data';
import { CoreStateModule } from '@second-pass/core-state';
import { MaterialModule } from '@second-pass/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { AppRoutingModule } from './routing.module';
import { InstrumentsListComponent } from './instruments/instruments-list/instruments-list.component';
import { InstrumentDetailsComponent } from './instruments/instrument-details/instrument-details.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, InstrumentsComponent, InstrumentsListComponent, InstrumentDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
