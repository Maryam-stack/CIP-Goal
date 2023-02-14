import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ToteBagsComponent } from './tote-bags/tote-bags.component';
import { ToteBagDetailComponent } from './tote-bag-detail/tote-bag-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { ToteBagsService } from './toteBags.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
// import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ToteBagsComponent,
    ToteBagDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    MatToolbarModule,
  ],
  providers: [ToteBagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
