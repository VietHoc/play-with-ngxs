import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShoppingComponent} from './shopping/shopping.component';
import {CartComponent} from './cart/cart.component';
import {NgxsModule} from '@ngxs/store';
import {environment} from 'src/environments/environment';
import {QuantityState} from './shopping/shopping.actions';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {TodosComponent} from './todos/todos.component';
import {AddTodoComponent} from './todos/add-todo/add-todo.component';
import {TodoListComponent} from './todos/todo-list/todo-list.component';
import {FormsModule} from '@angular/forms';
import { TodoState } from './todos/stores/todo-actions';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    CartComponent,
    TodosComponent,
    AddTodoComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([QuantityState, TodoState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
