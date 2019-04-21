import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { DescriptionComponent } from './description/description.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputSwitchModule} from "primeng/primeng";

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
