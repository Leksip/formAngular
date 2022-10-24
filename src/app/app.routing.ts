import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ProfileFormComponent} from "./forms/profile-form/profile-form.component";
import {AddressFormComponent} from "./forms/address-form/address-form.component";

const routes: Routes = [
  {path: '', component: ProfileFormComponent},
  {path: 'address', component: AddressFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRouting {
}
