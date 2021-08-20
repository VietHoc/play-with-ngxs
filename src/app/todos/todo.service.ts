import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  public getTodos(): Observable<string[]> {
    return of(['A', 'B', 'C', 'D', 'E', 'F']);
  }

  public addTodo(text: string): Observable<string> {
    return of(text);
  }
}
