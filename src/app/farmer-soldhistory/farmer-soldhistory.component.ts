
import { Component, OnInit } from '@angular/core';

import { SoldHistoryService } from '../sold-history.service';

@Component({
  selector: 'app-farmer-soldhistory',
  templateUrl: './farmer-soldhistory.component.html',
  styleUrls: ['./farmer-soldhistory.component.css']
})
export class FarmerSoldhistoryComponent implements OnInit {



  soldData:any;
  constructor( private soldService:SoldHistoryService ) {
  }

  ngOnInit(): void {


    this.soldService.getAllSoldHistory().subscribe(res=>{
this.soldData=res
    })


  }

}
