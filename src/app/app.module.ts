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


@NgModule({
  declarations: [
    AppComponent,
    LogCompComponent,
    TodoComponent,
    CreditsComponent,
    TodoEditorComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
