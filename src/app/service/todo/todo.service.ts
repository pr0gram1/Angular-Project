import { Todoelement } from '../../model/todoelement.model';
import { Subject } from 'rxjs';

export class TodoService {
  todoelementsChanged = new Subject<Todoelement[]>();
  changingStateEle = new Subject<number>();
  private todoelements: Todoelement[] = [
    new Todoelement('I need to wash the car'),
    new Todoelement('Remind yours self that you have an exam today'),
    new Todoelement('Watch the game with friends'),
    new Todoelement('Do some workout at 18:00'),
    new Todoelement('Do the dishes'),


  ];

  getTodoelements() {
    return this.todoelements.slice();
  }


  addTodoelement(todoelement: Todoelement) {
    this.todoelements.push(todoelement);
    this.todoelementsChanged.next(this.todoelements.slice());
  }

  addTodoelements(todoelements: Todoelement[]) {
    this.todoelements.push(...todoelements);
    this.todoelementsChanged.next(this.todoelements.slice());
  }

  getTodoelement(index: number) {
    return this.todoelements[index];
  }

  deleteTodoelement(index: number) {
    this.todoelements.splice(index, 1);
    this.todoelementsChanged.next(this.todoelements.slice());
  }

}
