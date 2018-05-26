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

    // Chart 1
    //

    chart1Data = [{
      label: 'Visits',
      data: [93, 25, 95, 59, 46, 68, 4, 41],
      borderWidth: 1
    }, {
      label: 'Returns',
      data: [83, 1, 43, 28, 56, 82, 80, 66],
      borderWidth: 1,
      borderDash: [5, 5]
    }];
    chart1Options = {
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: '#aaa'
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: '#aaa'
          }
        }]
      },
      responsive: false,
      maintainAspectRatio: false
    };
    chart1Colors = [{
      backgroundColor: 'rgba(28,180,255,.05)',
      borderColor: 'rgba(28,180,255,1)'
    }, {
      backgroundColor: 'rgba(136, 151, 170, 0.1)',
      borderColor: '#8897aa'
    }];

}
