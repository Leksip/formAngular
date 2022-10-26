import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ProfileFormComponent} from "./forms/profile-form/profile-form.component";
import {AddressFormComponent} from "./forms/address-form/address-form.component";
import {DocumentsComponent} from "./forms/documents/documents.component";
import {SuccessComponent} from "./forms/success/success.component";
import {NextPageAddressGuard} from "./shared/next-page-address.guard";
import {NextPageDocumentGuard} from "./shared/next-page-document.guard";
import {NextPageSuccessGuard} from "./shared/next-page-success.guard";

const routes: Routes = [
  {path: '', component: ProfileFormComponent},
  {path: 'address', component: AddressFormComponent, canActivate: [NextPageAddressGuard]},
  {path: 'documents', component: DocumentsComponent, canActivate: [NextPageDocumentGuard]},
  {path: 'success', component: SuccessComponent, canActivate: [NextPageSuccessGuard]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRouting {
}
