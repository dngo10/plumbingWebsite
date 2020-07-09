import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MinimumRequiredFixturesComponent} from './components/minimum-required-fixtures/minimum-required-fixtures.component';


const routes: Routes = [
  {path: '', redirectTo: '/minimum-required-fixture', pathMatch: 'full'},
  {path: 'minimum-required-fixture',  component: MinimumRequiredFixturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
