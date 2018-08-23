import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface ktalathi {
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class LambdaService {
  private ktalathiTitleURL: string = "https://8wu8nlu0lj.execute-api.us-east-1.amazonaws.com/prod";

  constructor(private http:HttpClient) { }

  getTitle() {            
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin','*');

    // const headers = new HttpHeaders()
    //                       .set("Access-Control-Allow-Origin", "*")
    //                       .set("Access-Control-Allow-Headers", "*");
    return this.http.get(this.ktalathiTitleURL, {headers});
  }
}
