import { Component, OnInit } from '@angular/core';
import { LambdaService, ktalathi } from '../../providers/lambda.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title: ktalathi = {
    title: ''
  };

  constructor(
    private lambdaService: LambdaService
  ) {
    this.showConfig();
  }

  ngOnInit() {
  }

  showConfig() {
    this.lambdaService.getTitle()
      .subscribe((data: ktalathi) => this.title = {
          title: data['title']
      });
  }

}
