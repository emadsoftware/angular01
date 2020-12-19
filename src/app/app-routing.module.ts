import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', component: MyLineChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
