import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-update-campaign',
  templateUrl: './update-campaign.component.html',
  styleUrls: ['./update-campaign.component.css']
})
export class UpdateCampaignComponent implements OnInit {
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

  updateCampaign() {
    this.campaignService.updateCampaign(this.id, this.campaign)
      .subscribe(data => {
        console.log(data);
        this.campaign = new Campaign();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCampaign();    
  }

  gotoList() {
    this.router.navigate(['/campaigns']);
  }

}
