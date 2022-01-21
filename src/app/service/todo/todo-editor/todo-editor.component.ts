import { Component,OnDestroy,OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
  
  import { Todoelement } from '../../../model/todoelement.model';
  import { TodoService } from '../todo.service';
  
  @Component({
    selector: 'app-todo-editor',
    templateUrl: './todo-editor.component.html',
    styleUrls: ['./todo-editor.component.css'],
    
  })
  export class TodoEditorComponent implements OnInit, OnDestroy {
    @ViewChild ('f') todoEdForm: NgForm;
    subscription: Subscription;
    isEditing = false;
    indexofEditedEle: number;
    editedEle: Todoelement;
  
    
    constructor(private todoService: TodoService) {
      
     }
    
    
    ngOnInit() {
     this.subscription = this.todoService.changingStateEle.subscribe();
     (index: number) => {
       this.indexofEditedEle = index;
       this.isEditing = true;
       this.editedEle = this.todoService.getTodoelement(index);
       this.todoEdForm.setValue({
         information: this.editedEle.information
       })
     }

    };
  
  
    onAddItem(form: NgForm) {
      const value = form.value;
      const newTodoelement = new Todoelement(value.todoInfo);
      this.todoService.addTodoelement(newTodoelement);
    }

    onDelete() {
      this.todoService.deleteTodoelement(this.indexofEditedEle);

    }
    

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }


  }