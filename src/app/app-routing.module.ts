import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { AppComponent } from './app.component';
import { MyBarGraphComponent } from './my-bar-graph/my-bar-graph.component';
import { MyDoughnutGraphComponent } from './my-doughnut-graph/my-doughnut-graph.component';


const routes: Routes = [
  { path: '', component: MyBarGraphComponent },
  { path: '', component: MyLineChartComponent, outlet: 'secondary' },
  { path: '', component: MyDoughnutGraphComponent, outlet: 'tertiary' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
