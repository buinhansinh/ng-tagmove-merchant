import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { WebsocketService } from '../services/websocket.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Home';
  }

}
