import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-welcome',
  templateUrl: './farmer-welcome.component.html',
  styleUrls: ['./farmer-welcome.component.css']
})
export class FarmerWelcomeComponent implements OnInit {

  farmerId:any=0
  apiId!:number
  constructor( private http:HttpClient) {}
  userId!:string|null

  ngOnInit(): void {

    this.userId=sessionStorage.getItem('userId')
    this.http.get(`http://localhost:8083/getFarmer/${this.userId}`).subscribe(res=>{this.farmerId=res
    // thissessionStorage.setItem(this.farmerId.farmerId);
    sessionStorage.setItem('id',JSON.stringify(res) );

  }
    )


   console.log(this.userId);

  }



}
