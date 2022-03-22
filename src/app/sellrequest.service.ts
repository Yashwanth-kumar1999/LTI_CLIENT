import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SellRequestStatus } from './sell-request-status';
import { Sellrequest } from './sellrequest';

@Injectable({
  providedIn: 'root'
})
export class SellrequestService {

  x:any=sessionStorage.getItem('id')

  constructor( private http:HttpClient) {

   }
  register(sellrequest:Sellrequest):Observable<SellRequestStatus>{
        let y;
      if(this.x!=null){
         y=JSON.parse(this.x);
      }

    return this.http.post<SellRequestStatus>(`http://localhost:8083/sellRequest/${y.farmer_id}.api`,sellrequest);


  }
}
