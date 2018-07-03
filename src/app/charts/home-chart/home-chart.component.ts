import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import homeChartData from '../../../assets/json/home-chart-data';

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

  constructor(private _socket: WebsocketService) {

  }

  ngOnInit() {
    this._socket.connect('ws://localhost:5000/ws').subscribe((data) => {
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
