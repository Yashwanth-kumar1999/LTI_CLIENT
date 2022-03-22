import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidder-welcome',
  templateUrl: './bidder-welcome.component.html',
  styleUrls: ['./bidder-welcome.component.css']
})
export class BidderWelcomeComponent implements OnInit {
bidderId:any=0
  userId!:string|null

  constructor( private http:HttpClient) { }
    amount!:number

radioValue!:number

  biddingDetails:any
  ngOnInit(): void {
    this.userId=sessionStorage.getItem('userId')
    console.log(this.userId)
    this.http.get("http://localhost:8083/getAllBiddingDetails").subscribe(res=>this.biddingDetails=res )
    this.http.get(`http://localhost:8083/getBidder/${this.userId}`).subscribe(res=>{this.bidderId=res
    // thissessionStorage.setItem(this.farmerId.farmerId);
    sessionStorage.setItem('id',JSON.stringify(res) );

  }
    )

  }
  getValue( event:any){

console.log(event.target.value)

this.radioValue=event.target.value



  }

  setBid(){
   let x:any=sessionStorage.getItem('id')
      // console.log(this.amount)

      let y;
      if(x!=null){
         y=JSON.parse(x);
      }
        console.log(this.amount)
        console.log(this.radioValue)
        console.log(y.bidder_id)

        // console.log("bid"+ JSON.stringify( this.biddingDetails))
        // console.log("amount"+ this.amount)
      // if(this.amount>this.biddingDetails.currentBid){
        this.http.post(`http://localhost:8083/updateApi/${this.radioValue}/${y.bidder_id}/${this.amount }`,null).subscribe(res=>{console.log(res)

        alert("Your bid has been sent for approval")

    })






  }





}
