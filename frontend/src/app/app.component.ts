import { Component, OnInit } from '@angular/core';
import { Emerald } from './emerald';
import { EmeraldService } from './emerald.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Campaign Manager';
  funds: number;
  
  constructor(private emeraldService: EmeraldService) { 
  }
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.emeraldService.getFunds().then(
      (emerald) => {
        this.funds = emerald.funds;
      }
    )
  }
}
