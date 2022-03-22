import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-bidder-register',
  templateUrl: './bidder-register.component.html',
  styleUrls: ['./bidder-register.component.css']
})
export class BidderRegisterComponent implements OnInit {

  customerId=0;
  message="";

  constructor(private service:RegisterService) { }

   customer:Customer=new Customer();




  ngOnInit(): void {

  }

  processRegistration(){

    this.service.register(this.customer).subscribe(
      res=>{
        alert(JSON.stringify(res))
      if(res.status==true){

        this.customerId=res.registeredCustomerId;
      }else{
        this.message=res.messageIfAny;
      }
    }

    )

  }


}
