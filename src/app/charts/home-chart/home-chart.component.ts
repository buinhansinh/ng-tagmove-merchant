import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import homeChartData from '../../../assets/json/home-chart-data';

@Component({
  selector: 'app-home-chart',
  templateUrl: './home-chart.component.html',
  styleUrls: ['./home-chart.component.scss']
})
export class HomeChartComponent implements OnInit {
  lineChartData: Array<any> = [
    {
      label: 'Offer',
      lineTension: 0, 
      data: [100, 80, 50, 49, 40, 39, 20]
    }
  ];

  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


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

  constructor() { }

  ngOnInit() {
  }

}
