import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Campaign } from '../campaign';
import { CampaignService } from '../campaign.service';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { EmeraldService } from '../emerald.service';
import { Emerald } from '../emerald';

const keywords = ['keyword1', 'anotherone', 'next', 'campaign'];

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})

export class CreateCampaignComponent implements OnInit {
  campaign: Campaign = new Campaign();
  product: Product = new Product();
  id: number;
  submitted = false;
  funds: number;

  constructor(private campaignService: CampaignService, 
              private productService: ProductService, 
              private router: Router,
              private emeraldService: EmeraldService) { }

  ngOnInit() {
    this.emeraldService.getFunds().then(
      (emerald) => {
        this.funds = emerald.funds;
      }
    )
  }

  newCampaign(): void {
    this.submitted = false;
    this.campaign = new Campaign();
  }

  save() {
    
    this.productService.getProduct(this.id).subscribe(
      (product) => {
        this.campaign.product = product;
        this.campaignService.createCampaign(this.campaign).subscribe(
          data => {
            this.gotoList();
          },
          error => console.log(error)
        )
      }
    )
  }

  onSubmit() {
    this.submitted = true;
    
    let emerald = new Emerald(1, this.funds-this.campaign.bid);
    this.emeraldService.changeFunds(1, emerald);
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
