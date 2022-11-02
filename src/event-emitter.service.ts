import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeFirstComponentFunction = new EventEmitter();    
  subsVar: Subscription | undefined;    
    
  constructor() { }    
    
  onFirstComponentButtonClick(searchQuery:string) {    
    this.invokeFirstComponentFunction.emit(searchQuery);    
  }    
}    
