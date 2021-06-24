import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanolComponent } from './components/espanol/espanol.component';
import { FrancesComponent } from './components/frances/frances.component';
import { HomeComponent } from './components/home/home.component';
import { InglesComponent } from './components/ingles/ingles.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'frances', component: FrancesComponent },
  { path: 'ingles', component: InglesComponent },
  { path: 'espanol', component: EspanolComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
