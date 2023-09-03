import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public toggleSidebar: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
