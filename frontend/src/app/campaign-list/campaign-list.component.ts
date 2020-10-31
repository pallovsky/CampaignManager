import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaigns: Observable<Campaign[]>;

  constructor(private campaignService: CampaignService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData()  {
    this.campaigns = this.campaignService.getCampaignList();
  }

  deleteCampaign(id: number) {
    this.campaignService.deleteCampaign(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  campaignDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
