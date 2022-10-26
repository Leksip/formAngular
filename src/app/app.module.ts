import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {ProfileFormComponent} from './forms/profile-form/profile-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddressFormComponent } from './forms/address-form/address-form.component';
import { AlertComponent } from './shared/alert/alert.component';
import { DocumentsComponent } from './forms/documents/documents.component';
import { SuccessComponent } from './forms/success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileFormComponent,
    AddressFormComponent,
    AlertComponent,
    DocumentsComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
