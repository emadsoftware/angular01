import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { ChartsModule } from 'ng2-charts';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { MyBarGraphComponent } from './my-bar-graph/my-bar-graph.component';
import { MyDoughnutGraphComponent } from './my-doughnut-graph/my-doughnut-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    MyLineChartComponent,
    MyBarGraphComponent,
    MyDoughnutGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    ChartsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
