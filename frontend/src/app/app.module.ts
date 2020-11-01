import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { UpdateCampaignComponent } from './update-campaign/update-campaign.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCampaignComponent,
    CampaignDetailsComponent,
    CampaignListComponent,
    UpdateCampaignComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
