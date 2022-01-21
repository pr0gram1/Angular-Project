// Hierarchical Injector
// AppModule - same instance of Service is available Application- wide
// AppComponent - -//- for all Compoenents but for all services
// Any other Component - -//- for the Component and all tis child components

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogCompComponent } from './log-comp/log-comp.component';
import { TodoComponent } from './service/todo/todo.component';
import { CreditsComponent } from './service/credits/credits.component';
import { TodoEditorComponent } from './service/todo/todo-editor/todo-editor.component';
import { TodoService } from './service/todo/todo.service';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { ParticlesModule } from 'angular-particle';
//import {CustomDatePipe} from './custom.datepipe';

  
@NgModule({
  declarations: [
    AppComponent,
    LogCompComponent, 
    TodoComponent,
    CreditsComponent,
    TodoEditorComponent

    //CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //BrowserAnimationsModule
    //ParticlesModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
