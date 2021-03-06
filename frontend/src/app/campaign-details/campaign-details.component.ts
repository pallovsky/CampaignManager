import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {
  id: number;
  campaign: Campaign;

  constructor(private route: ActivatedRoute, private router: Router, 
              private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.campaign = new Campaign();

    this.id = this.route.snapshot.params['id'];
    
    this.campaignService.getCampaign(this.id)
      .subscribe(data => {
        console.log(data)
        this.campaign = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['campaigns']);
  }

}
