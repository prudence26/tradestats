import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeStatisticsComponent } from './trade-statistics/trade-statistics.component';
import { TestComponent } from './test/test.component';
TestComponent

const routes: Routes = [
  { path: '', redirectTo: '/trade-statistics', pathMatch: 'full'},
  { path: 'trade-statistics', component: TradeStatisticsComponent },
  { path: 'testtest', component: TestComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
