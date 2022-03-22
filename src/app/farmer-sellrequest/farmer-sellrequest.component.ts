import { Component, OnInit } from '@angular/core';
import { Sellrequest } from '../sellrequest';
import { SellrequestService } from '../sellrequest.service';

@Component({
  selector: 'app-farmer-sellrequest',
  templateUrl: './farmer-sellrequest.component.html',
  styleUrls: ['./farmer-sellrequest.component.css']
})
export class FarmerSellrequestComponent implements OnInit {


  sellrequest:Sellrequest=new Sellrequest();

sellRequestId!:number
message!:string

  constructor( private sellReqService:SellrequestService ) { }

  ngOnInit(): void {
  }
  processRegistration1(){

    this.sellReqService.register(this.sellrequest).subscribe(
      res=>{
        if(res.status==true){

          this.sellRequestId=res.requestId
          alert(

            "sell request placed successfully!")
        }else{
          this.message=res.messageIfAny;
        }
      }
    )

  }

}
