import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {
  campaign: Campaign = new Campaign();
  submitted = false;

  constructor(private campaignService: CampaignService, private router: Router) { }

  ngOnInit(): void {
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

}
