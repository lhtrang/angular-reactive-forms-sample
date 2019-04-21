import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { DescriptionComponent } from './description/description.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CalendarModule, InputSwitchModule} from "primeng/primeng";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    InputSwitchModule,
    CalendarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
