import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TpHomeComponent } from './components/tp-home/tp-home.component';

const routes: Routes = [
  { path: '', component: TpHomeComponent},
  { path: 'top', component: TpHomeComponent },
  { path: 'new', component: TpHomeComponent },
  { path: 'slots', component: TpHomeComponent },
  { path: 'jackpots', component: TpHomeComponent },
  { path: 'live', component: TpHomeComponent },
  { path: 'blackjack', component: TpHomeComponent },
  { path: 'roulette', component: TpHomeComponent },
  { path: 'table', component: TpHomeComponent },
  { path: 'poker', component: TpHomeComponent },
  { path: 'other', component: TpHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }