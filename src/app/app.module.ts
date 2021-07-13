import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GeneralInfoComponent} from './general-info/general-info.component';
import {PhoneInfoComponent} from './phone-info/phone-info.component';
import {EmergencyContactsComponent} from './emergency-contacts/emergency-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralInfoComponent,
    PhoneInfoComponent,
    EmergencyContactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
