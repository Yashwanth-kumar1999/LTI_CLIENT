import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../admin-dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  radioValue!:number
  radioValue2!:number

  allData:any=0
  biddingData:any|null=0
  constructor( private adminService:AdminDashboardService,
    private http:HttpClient
    ) {

     }

  ngOnInit(): void {

    this.adminService.getAllDetails().subscribe(res=>{
      this.allData=res
      // console.log(res)
          })

          this.adminService.getAllBidding().subscribe(res=>{
            this.biddingData=res
            console.log(res)
          })
  }
  getValue(event:any){
    console.log(event.target.value)

    this.radioValue=event.target.value
  }

approveRequest(){

let x= Number(this.radioValue)
// console.log(this.radioValue)
console.log(typeof(x))
  this.http.post(`http://localhost:8083/approveSellRequest/${x}`,null).subscribe(res=>{console.log(res)
  alert("sell request has been approved")
}
  )
}


getValue2(event:any){
this.radioValue2= event.target.value
console.log(this.radioValue2)

}
approveBidding(bid:any){

  let y= Number(this.radioValue2)
  console.log(y)
    let current_bid=bid
    console.log(current_bid)
  this.http.post(`http://localhost:8083/approveBid/${y}/${current_bid}`,null).subscribe(res=>{console.log(res)
  alert("Bidding request has been approved")
}
  )


}


}
