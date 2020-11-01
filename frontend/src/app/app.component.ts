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
  funds: Emerald;
  i: number = 20000;

  constructor(private emeraldService: EmeraldService) { 
  }
  ngOnInit(): void {
    this.reloadData;
  }

  reloadData(){
    this.emeraldService.getFunds().subscribe(
      (emerald) => {
        this.funds = emerald;
      }
    )
  }
}
