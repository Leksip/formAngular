import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {FormService} from "./form.service";

@Injectable({
  providedIn: 'root'
})
export class NextPageDocumentGuard implements CanActivate {
  constructor(private formValue: FormService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.formValue.formAddressValue && this.formValue.formProfileValue) {
      return true
    } else {
      this.router.navigate(['/'])
    }
  }
}
