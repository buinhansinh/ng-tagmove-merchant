import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-home-chart',
  templateUrl: './home-chart.component.html',
  styleUrls: ['./home-chart.component.scss']
})
export class HomeChartComponent implements OnInit {
  chartArray: any[];

  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: true,
  }

  lineChartColors: Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ]

  lineChartLegend: boolean = false;
  lineChartType: string = 'line';

  constructor(
    private _socket: WebsocketService,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    const config = this.configService.getConfig();
    this._socket.connect(`ws://${config.baseUrl}/ws`).subscribe((data) => {
      const dataDetails = data;
      const chartDataSet = [
        {
          label: 'Offer',
          lineTension: 0,
          data: dataDetails.Offers.map(item => item.price)
        }
      ]
      const labels = Array.apply(null, { length: dataDetails.Offers.length }).map(Number.call, Number);
      this.chartArray = [{ data: chartDataSet, labels }];
    });

    this._socket.emit({ "type": 1, "productId": "5b3a9814c1880a0578988d6a" });
  }

}
