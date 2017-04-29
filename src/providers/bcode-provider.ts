import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BcodeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BcodeProvider {
 data:any;
  constructor(public http: Http) {
    console.log('Hello BcodeProvider Provider');
  }

  getData(){
    if(this.data){
      return Promise.resolve(this.data);
    }
    return new Promise(resolve =>{
      this.http.get('assets/dataset/pod_nutrition_us.json')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

}//End of class
