import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic Data Visualization App V.1';
  url = 'https://www.reddit.com/r/webdev/.json?limit=50';
  items = [];
  msg= ['Hello'];
  
  constructor(private http: HttpClient){
    this.http.get(this.url).toPromise().then(data => {
        this.modifyThings();
        console.log(data['data'].children);
        let innerJson = data['data'].children;
        for (let key in innerJson)
          if (innerJson.hasOwnProperty(key))
            this.items.push(innerJson[key]);
      });
  }

  modifyThings(){
    this.msg = ['Modified hello from parent 1'];    
  }

  onOutletLoaded(component,msg) {
    this.modifyThings();
    component.MSG = this.msg;
  }  

}
