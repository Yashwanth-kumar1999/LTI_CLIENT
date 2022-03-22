import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {

  FarmerBidding:any

  x:any=sessionStorage.getItem('id')

  constructor( private http:HttpClient) { }

  ngOnInit(): void {

    let y;
      if(this.x!=null){
         y=JSON.parse(this.x);
      }

      console.log(y)
      let farmer_id=y.farmer_id
     this.http.get(`http://localhost:8083/getFarmerBIdding/${farmer_id}`).subscribe(
      res=>this.FarmerBidding=res
    )
  }

}
