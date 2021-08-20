import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {AddToCart, ResetCart} from './shopping.actions';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {}

  public addToCart(quantity: number): void {
    console.log(new AddToCart(quantity));

    this.store.dispatch(new AddToCart(quantity));
  }

  public resetCart(): void {
    this.store.dispatch(new ResetCart());
  }
}
