import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAppTask:boolean = false;
  private subjet = new Subject<any>();

  constructor() { }

  toggleAddTask():void{
    this.showAppTask = !this.showAppTask;
    this.subjet.next(this.showAppTask);
  }

  onToggle():Observable<any>{
    return this.subjet.asObservable();
  }
}
