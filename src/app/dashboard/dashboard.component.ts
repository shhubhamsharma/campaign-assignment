import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  display = 'none';
  campaignModel: any;
  ruleList: any;
  constructor(private api: ApiService) {
    this.campaignModel = {};
    this.ruleList = [];
  }
  schedules = [{ id: 0, text: 'Every 15 Minute' }, { id: 1, text: 'Every hour' }, { id: 2, text: 'Every day at 12:00 AM' }];
  actions = [{ id: 0, text: 'Notify' }, { id: 1, text: 'Actions' }];
  campaignsList = [];
  selectcampaign = {};
  onChange(newValue) {
    this.selectcampaign = newValue;
  }
  ngOnInit() {
    this.api.allCampaigns().subscribe((res: any) => {
      this.campaignsList = res.data;
    });
    this.allCampaigns();
  }
  allCampaigns() {
    this.api.allRules().subscribe((res: any) => {
      this.ruleList = res.data;
    }, (err) => {
      console.log('err', err);
    });
  }
  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
  submitCampaign() {
    this.api.submitRule(this.campaignModel).subscribe((res) => {
      this.campaignModel = {};
      this.allCampaigns();
      this.display = 'none';
    }, (err) => {
      console.log('err', err);
    });
    console.log(this.campaignModel);
  }
}
