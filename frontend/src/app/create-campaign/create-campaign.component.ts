import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

const keywords = ['keyword1', 'anotherone', 'next', 'campaign'];

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {
  campaign: Campaign = new Campaign();
  submitted = false;

  constructor(private campaignService: CampaignService, private router: Router) { }

  ngOnInit() {
  }

  newCampaign(): void {
    this.submitted = false;
    this.campaign = new Campaign();
  }

  save(){
    this.campaignService
    .createCampaign(this.campaign).subscribe(data => {
      console.log(data)
      this.campaign = new Campaign();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/campaigns']);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : keywords.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
}
