import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // dataEvent = new EventEmitter<string>()

  dataEvent = new Subject<string>()

  raiseDataEmitterEvent(data: string) {
    this.dataEvent.next(data);
  }

}
