import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

export interface Alert {
  type: string
  text: string
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alert$ = new Subject<Alert>()

  success(text: string) {
    this.alert$.next({type: 'success', text})
  }

  danger(text: string) {
    this.alert$.next({type: 'danger', text})
  }

}
