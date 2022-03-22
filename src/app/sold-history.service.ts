import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SoldHistoryService {



  x:any=sessionStorage.getItem('id')
  constructor(private http:HttpClient) { }



getAllSoldHistory(){


  let y;
      if(this.x!=null){
         y=JSON.parse(this.x);
      }

return this.http.get(`http://localhost:8083/getAllFarmerSoldHistory/${y}`);


}
}
