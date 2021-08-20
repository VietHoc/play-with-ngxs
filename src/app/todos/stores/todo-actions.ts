import {Injectable} from '@angular/core';
import {State, Action, StateContext} from '@ngxs/store';

export class AddTodo {
  static readonly type = '[Todo] AddTodo';
  constructor(public text: string) {}
}

@State<{todos: string[]}>({
  name: 'todo',
  defaults: {
    todos: [],
  },
})
@Injectable()
export class TodoState {
  @Action(AddTodo)
  addToCart(ctx: StateContext<{todos: string[]}>, action: AddTodo) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todos: [...state.todos, action.text],
    });
  }
}
