import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guards/auth.guard';
import { LogCompComponent } from './log-comp/log-comp.component';
import { TodoComponent } from './service/todo/todo.component';
import { CreditsComponent } from './service/credits/credits.component';
import { TodoEditorComponent } from './service/todo/todo-editor/todo-editor.component';

const routes: Routes = [

  { path: 'todo', component: TodoComponent, canActivate: [AuthGuard] },
  { path: 'credits', component: CreditsComponent, canActivate: [AuthGuard] },
  { path: '', component: LogCompComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }