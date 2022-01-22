import { Component, OnDestroy, OnInit } from '@angular/core';
//import { trigger, state, style, transition, animate } from "@angular/animations";


import { Subscription } from 'rxjs';

import { Todoelement } from '../../model/todoelement.model';
import { TodoService } from './todo.service';

// properties
@Component({
  selector: 'cf-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],

  /**
   * 
   * 
   * animations: [
      trigger('slider', [
        state('i', style({
          opacity: 1,
          transform: 'translateX(0)'
        })),
        transition('void ==> *', [
          style({
            opacity: 0,
            tranform: 'translateX(-85px)'
          }),
          animate(300)
      ]),
    ]),
  ]
  **/


})
export class TodoComponent implements OnInit, OnDestroy {
  todoelements: Todoelement[];
  private elementSub: Subscription;

  constructor(private todoService: TodoService) {
  }


  ngOnInit(): void {

    this.todoelements = this.todoService.getTodoelements();
    this.elementSub = this.todoService.todoelementsChanged
      .subscribe(
        (todoelements: Todoelement[]) => {
          this.todoelements = todoelements;
        }
      );
  }

  ngOnDestroy(): void {
    this.elementSub.unsubscribe();
  }

  changeStateofEle(index: number) {
    this.todoService.changingStateEle.next(index);

  }

}