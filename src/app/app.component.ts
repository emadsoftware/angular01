import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic Data Visualization App V.1';
  url = 'https://www.reddit.com/r/webdev/.json?limit=1';
  items = [];
  
  constructor(private http: HttpClient){
    this.http.get(this.url).toPromise().then(data => {
        console.log(data['data'].children);
        let innerJson = data['data'].children;
        for (let key in innerJson)
          if (innerJson.hasOwnProperty(key))
            this.items.push(innerJson[key]);
      });
  }
}
