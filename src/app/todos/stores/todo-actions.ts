import {Injectable} from '@angular/core';
import {State, Action, StateContext} from '@ngxs/store';
import {TodoService} from '../todo.service';
import {tap} from 'rxjs/operators';
export class AddTodo {
  static readonly type = '[Todo] AddTodo';
  constructor(public text: string) {}
}

export class FetchTodos {
  static readonly type = '[Todo] FetchTodos';
}

@State<{todos: string[]}>({
  name: 'todo',
  defaults: {
    todos: [],
  },
})
@Injectable()
export class TodoState {
  constructor(private todoService: TodoService) {}

  @Action(FetchTodos)
  fetchedTodos(ctx: StateContext<{todos: string[]}>) {
    return this.todoService.getTodos().pipe(
      tap((todos: string[]) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          todos: [...todos],
        });
      })
    );
  }

  @Action(AddTodo)
  addToCart(ctx: StateContext<{todos: string[]}>, action: AddTodo) {
    return this.todoService.addTodo(action.text).pipe(
      tap((newTodo: string) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          todos: [...state.todos, newTodo],
        });
      })
    );
  }
}
