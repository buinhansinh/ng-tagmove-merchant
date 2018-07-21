import { Component, OnInit, ViewChild } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { ProductService } from '../../services/product.service';
import { ConfigService } from '../../services/config.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-chart',
  templateUrl: './home-chart.component.html',
  styleUrls: ['./home-chart.component.scss']
})
export class HomeChartComponent implements OnInit {
  chartArray: any[];
  public sliderForm: FormGroup;
  public offers: any[];

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
    private formBuilder: FormBuilder,
    private _socket: WebsocketService,
    private configService: ConfigService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const config = this.configService.getConfig();
    this._socket.connect(`wss://${config.baseUrl}/ws`).subscribe((data) => {
      setTimeout(() => {
        this.offers = data.Offers;

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
    });

    this._socket.emit({ "type": 1, "productId": "5b3a9814c1880a0578988d6a" });

    this.createForm();
  }

  createForm() {
    this.sliderForm = this.formBuilder.group({
      range: [1]
    });
  }

  getMaxPoint() {
    return this.offers ? this.offers.length - 1 : 1;
  }

  getSelectedOffers() {
    return this.sliderForm.get('range').value + 1;
  }

  getTotalPriceForSelectedOffers() {
    let total = 0;

    if (this.offers) {
      const selectedCount = this.getSelectedOffers();

      for (let i = 0; i < selectedCount; i++) {
        total += this.offers[i].price;
      }
    }

    return total;
  }

  sell() {
    const selectedCount = this.getSelectedOffers();
    const selectedOffersArray: any[] = [];
    console.log(this.offers)

    for (let i = 0; i < selectedCount; i++) {
      selectedOffersArray.push(this.offers[i].id);
    }

    this.productService.acceptOffers(selectedOffersArray).subscribe((res) => {
      console.log(res)
    });
  }

}
