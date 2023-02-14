import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToteBagsComponent } from './tote-bags/tote-bags.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToteBagDetailComponent } from './tote-bag-detail/tote-bag-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ToteBagDetailComponent },
  { path: 'toteBags', component: ToteBagsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
