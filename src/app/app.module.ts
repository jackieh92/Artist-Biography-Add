import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistbioComponent } from './artistbio/artistbio.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SofitukkerComponent } from './sofitukker/sofitukker.component';
import { TheblackkeysComponent } from './theblackkeys/theblackkeys.component';
import { JimmyhendrixComponent } from './jimmyhendrix/jimmyhendrix.component';
import { GorillazComponent } from './gorillaz/gorillaz.component';
import { ThewhitestripesComponent } from './thewhitestripes/thewhitestripes.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistbioComponent,
    SofitukkerComponent,
    TheblackkeysComponent,
    JimmyhendrixComponent,
    GorillazComponent,
    ThewhitestripesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
