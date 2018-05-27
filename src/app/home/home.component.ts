import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Home';
  }



}
