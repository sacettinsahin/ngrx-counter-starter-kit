import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ikinci',
  templateUrl: './ikinci.component.html',
  styleUrls: ['./ikinci.component.scss'],
})
export class IkinciComponent {
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
}
