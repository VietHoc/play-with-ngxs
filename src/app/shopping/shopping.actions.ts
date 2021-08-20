import {Injectable} from '@angular/core';
import {State, Action, StateContext} from '@ngxs/store';

export class AddToCart {
  static readonly type = '[Shopping] Add To Cart';
  constructor(public quantity: number) {}
}

export class ResetCart {
  static readonly type = '[Shopping] Reset Cart';
}

@State<{quantity: number}>({
  name: 'cart',
  defaults: {
    quantity: 0,
  },
})
@Injectable()
export class QuantityState {
  @Action(AddToCart)
  addToCart(ctx: StateContext<{quantity: number}>, action: AddToCart) {
    const state = ctx.getState();
    console.log(state);
    console.log(action);
    ctx.setState({
      ...state,
      quantity: state.quantity + action.quantity,
    });
  }

  @Action(ResetCart)
  resetCart(ctx: StateContext<{quantity: number}>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      quantity: 0,
    });
  }
}
