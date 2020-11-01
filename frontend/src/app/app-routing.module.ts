import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { UpdateCampaignComponent } from './update-campaign/update-campaign.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'campaigns', pathMatch: 'full' },
  { path: 'campaigns', component: CampaignListComponent },
  { path: 'add', component: CreateCampaignComponent },
  { path: 'update/:id', component: UpdateCampaignComponent },
  { path: 'details/:id', component: CampaignDetailsComponent },
  { path: 'products', component: ProductListComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
