import { Component, ViewChildren, QueryList } from '@angular/core';
import { AppService } from '../app.service';
import { LayoutService } from '../layout/layout.service';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-payouts',
  templateUrl: './payouts.component.html'
})
export class PayoutsComponent {
  isRTL: boolean;

  constructor(private appService: AppService, private layoutService: LayoutService) {
    this.appService.pageTitle = 'Dashboard 2 - Dashboards'
    this.isRTL = appService.isRTL;
  }


  // Chart 1
  //

  chart1Data = [{
    data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
      38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
    ],
    borderWidth: 0
  }];
  chart1Options = {
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    },
    responsive: false,
    maintainAspectRatio: false
  };
  chart1Colors = [{
    backgroundColor: 'rgba(87, 181, 255, 1)'
  }];


  // Chart 2
  //

  chart2Data = [{
    data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
      38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
    ],
    borderWidth: 1,
    pointRadius: 1,
    lineTension: 0
  }];
  chart2Options = {
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    },
    responsive: false,
    maintainAspectRatio: false
  };
  chart2Colors = [{
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#009688',
    pointBorderColor: 'rgba(0,0,0,0)'
  }];


  // Chart 3
  //

  chart3Data = [{
    data: [54, 46],
    borderWidth: 0
  }];
  chart3Options = {
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    cutoutPercentage: 94,
    responsive: false,
    maintainAspectRatio: false
  };
  chart3Colors = [{
    backgroundColor: ['#673AB7', '#f9f9f9'],
    hoverBackgroundColor: ['#673AB7', '#f9f9f9']
  }];

  // Resize charts
  //

  clientsData = [{
    avatar: '5-small.png',
    name: 'Nelle Maxwell',
    username: 'nmaxwell',
    email: 'nmaxwell@mail.com',
    phone: '+0 (123) 456 7891',
    company: 'Company Inc.'
  }, {
    avatar: '9-small.png',
    name: 'Amanda Warner',
    username: 'awarner',
    email: 'awarner@mail.com',
    phone: '+0 (123) 456 7891',
    company: 'Company Inc.',
    status: 1,
    messages: [
      { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
      { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
      { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
      { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
    ]
  }, {
    avatar: '4-small.png',
    name: 'Kenneth Frazier',
    username: 'kfrazier',
    email: 'kfrazier@mail.com',
    phone: '+0 (123) 456 7891',
    company: 'Company Inc.',
    status: 3,
    messages: [
      { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
      { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
      { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
      { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
    ]
  }, {
    avatar: '6-small.png',
    name: 'Mae Gibson',
    username: 'mgibson',
    email: 'mgibson@mail.com',
    phone: '+0 (123) 456 7891',
    company: 'Company Inc.'
  }, {
    avatar: '12-small.png',
    name: 'Arthur Duncan',
    username: 'aduncan',
    email: 'aduncan@mail.com',
    phone: '+0 (123) 456 7891',
    company: 'Company Inc.',
    status: 2
  }, {
    avatar: '11-small.png',
    name: 'Belle Ross',
    username: 'bross',
    email: 'bross@mail.com',
    phone: '+0 (123) 456 7891',
    company: 'Company Inc.',
    messages: [
      { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
      { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
      { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
      { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
    ]
  }, {
    avatar: '3-small.png',
    name: 'Allie Rodriguez',
    username: 'arodriguez',
    email: 'bross@mail.com',
    phone: '+0 (123) 456 7891',
    company: 'Company Inc.',
    status: 1,
    messages: [
      { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
      { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
      { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
      { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
    ]
  }, {
    avatar: '7-small.png',
    name: 'Alice Hampton',
    username: 'ahampton',
    email: 'ahampton@mail.com',
    phone: '+0 (123) 456 7891',
    company: 'Company Inc.',
    status: 3,
    messages: [
      { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
      { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
      { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
      { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
    ]
  }, {
    avatar: '8-small.png',
    name: 'Hallie Lewis',
    username: 'hlewis',
    email: 'hlewis@mail.com',
    phone: '+0 (123) 456 7891',
    company: 'Company Inc.',
    status: 2
  }, {
    avatar: '2-small.png',
    name: 'Leon Wilson',
    username: 'lwilson',
    email: 'lwilson@mail.com',
    phone: '+0 (123) 456 7891',
    company: 'Company Inc.',
    messages: [
      { content: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.', date: '1 day' },
      { content: 'Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.', date: '2 days' },
      { content: 'Eam facilis laboramus reprehendunt ei, ex esse fastidii per.', date: '3 days' },
      { content: 'Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.', date: '3 days' }
    ]
  }];

  @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective>;

  ngAfterViewInit() {
    setTimeout(() => {
      const resizeCharts = () => this.charts.forEach(chart => chart.chart.resize())

      // Initial resize
      resizeCharts();

      // For performance reasons resize charts on delayed resize event
      this.layoutService.on('resize.dashboard-2', resizeCharts);
    });
  }

  ngOnDestroy() {
    setTimeout(() => this.layoutService.off('resize.dashboard-2'));
  }

}
