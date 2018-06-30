import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import homeChartData from '../../../assets/json/home-chart-data';

/*BaseChartDirective.prototype.ngOnChanges = function (changes) {
  if (this.initFlag) {
      // Check if the changes are in the data or datasets
      if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
          if (changes['data']) {
              this.updateChartData(changes['data'].currentValue);
          }
          else {
              this.updateChartData(changes['datasets'].currentValue);
          }
          // add label change detection every time
          if (changes['labels']) { 
              if (this.chart && this.chart.data && this.chart.data.labels) {
                  this.chart.data.labels = changes['labels'].currentValue;    
              }
          }
          this.chart.update();
      }
      else {
          // otherwise rebuild the chart
          this.refresh();
      }
  }
};*/

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

  lineChartColors:Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ]

  lineChartLegend:boolean = false;
  lineChartType:string = 'line';

  constructor(private _socket: WebsocketService) {
      this._socket.connect('ws://localhost:5000/ws').subscribe(({ data }) => {
      const dataDetails = JSON.parse(data);
      const chartDataSet = [
        {
          label: 'Offer',
          lineTension: 0, 
          data: dataDetails.offers
        }
      ]
      const labels = Array.apply(null, {length: dataDetails.offers.length}).map(Number.call, Number);
      this.chartArray = [{data: chartDataSet, labels}];
    })
  }

  ngOnInit() {
  }

}
