import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {AddTodo} from '../stores/todo-actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  public text = '';
  constructor(private store: Store) {}

  ngOnInit() {}

  public add(): void {
    this.store.dispatch(new AddTodo(this.text)).subscribe((_) => {
      this.text = '';
    });
  }
}
