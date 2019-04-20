import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url = `http://localhost:3000`;
  constructor(private httpClient: HttpClient) { }

  public login(data: any) {
    return this.httpClient.post(`${this.url}/login/authenticate`, data);
  }
  public submitRule(data: any) {
    return this.httpClient.post(`${this.url}/campaign/submitRules`, data);
  }
  public allRules() {
    return this.httpClient.get(`${this.url}/campaign/allRules`);
  }
  public allCampaigns() {
    return this.httpClient.get(`${this.url}/campaign/allCampaigns`);
  }
}
