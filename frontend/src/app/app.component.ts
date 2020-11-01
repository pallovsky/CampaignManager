import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Emerald } from './emerald';
import { EmeraldService } from './emerald.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Campaign Manager';
  funds: Observable<Object> = this.emeraldService.getFunds();
  i: number = 20000;

  constructor(private emeraldService: EmeraldService) { 
  }
  ngOnInit(): void {
    this.reloadData;
  }

  reloadData(){
    this.funds = this.emeraldService.getFunds();
  }
}
