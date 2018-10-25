import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { WebsocketService } from "../../services/websocket.service";
import { ProductService } from "../../services/product.service";
import { ConfigService } from "../../services/config.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Product, Offer } from "../../model/model";
import { SharedService } from "../../services/shared.service";
import {
  switchMap,
  takeUntil,
  catchError,
  map,
  takeWhile
} from "rxjs/operators";
import { Subject } from "rxjs/Subject";
import { of } from "rxjs/observable/of";
import { timer } from "rxjs/observable/timer";
import { empty } from "rxjs/Observer";
import { BaseChartDirective } from "ng2-charts";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
declare var Chart: any;
export interface XAxisPosition {
  left: string;
  width: string;
}
const xAxis$ = new BehaviorSubject<XAxisPosition>({
  left: 4 + "px",
  width: 4 + "px"
});
Chart.pluginService.register({
  id: "getXAxisPosition",
  afterRender: function(chart, options) {
    xAxis$.next({
      left: chart.scales["x-axis-0"].left + "px",
      width: chart.scales["x-axis-0"].width + "px"
    });
  }
});
@Component({
  selector: "app-home-chart",
  templateUrl: "./home-chart.component.html",
  styleUrls: ["./home-chart.component.scss"]
})
export class HomeChartComponent implements OnInit, OnDestroy {
  @ViewChild(BaseChartDirective)
  chart;
  private readonly destroy$ = new Subject<any>();
  chartData: any;
  public sliderForm: FormGroup;
  public offers: any[];

  lineChartColors: Array<any> = [
    {
      // dark grey
      backgroundColor: "rgba(77,83,96,0.2)",
      borderColor: "rgba(77,83,96,1)",
      pointBackgroundColor: "rgba(77,83,96,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(77,83,96,1)"
    }
  ];

  stepSize = 10;
  lineChartOptions: any = this.getLineChartOptions(this.stepSize);
  lineChartLegend: boolean = false;
  lineChartType: string = "line";
  totalPrice: number;
  averagePrice: number;
  maxPoint = 2;
  loadingStatus: "loading" | "error" | "complete" | "no data" = "loading";
  xAxis: XAxisPosition;
  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private configService: ConfigService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    xAxis$.pipe(takeUntil(this.destroy$)).subscribe(axisPosition => {
      this.xAxis = axisPosition;
    });
    this.createForm();
    this.sharedService
      .getSelectedProduct()
      .pipe(
        switchMap((product: Product) => {
          this.loadingStatus = "loading";
          if (!product) {
            return of([]);
          }
          return this.productService.getOffers(product.id).pipe(
            catchError(err => {
              console.log(err);
              this.loadingStatus = "error";
              return of([]);
            })
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((offers: Offer[]) => {
        const chartDataSet = [
          {
            label: "Offer",
            lineTension: 0,
            data: offers.map((item, index) => ({ x: index + 1, y: item.price }))
          }
        ];
        const labels = Array.apply(null, {
          length: offers.length
        }).map(Number.call, Number);
        this.chartData = { data: chartDataSet, labels };
        this.offers = offers;
        if (this.offers && this.offers.length > 0) {
          this.maxPoint = this.getMaxPoint();
          this.stepSize = Math.floor(this.maxPoint / 10) + 1;
          this.lineChartOptions = this.getLineChartOptions(
            this.stepSize,
            this.maxPoint
          );
          timer(0).subscribe(() => {
            this.sliderForm.setValue({ range: this.maxPoint });
          });
          this.loadingStatus = "complete";
        } else {
          this.loadingStatus = "no data";
        }
      });
  }

  private getLineChartOptions(stepSize: number = 1, max: number = 1): any {
    return {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Price of offer"
            }
          }
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Number of offers"
            },
            type: "linear",
            ticks: {
              beginAtZero: false,
              min: 1,
              max: max
            }
          }
        ]
      }
    };
  }

  createForm() {
    this.sliderForm = this.formBuilder.group({
      range: [1]
    });
    this.sliderForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(values => {
        const range = values.range;
        const {
          totalPrice,
          averagePrice
        } = this.getTotalPriceForSelectedOffers(range);
        this.totalPrice = totalPrice;
        this.averagePrice = averagePrice;
      });
  }

  getMaxPoint() {
    return this.offers ? this.offers.length : 1;
  }

  getSelectedOffers() {
    return this.sliderForm.get("range").value;
  }

  getTotalPriceForSelectedOffers(
    selectedCount: number
  ): { totalPrice: number; averagePrice: number } {
    let total = 0;
    for (let i = 0; i < selectedCount; i++) {
      total += this.offers[i].price;
    }
    return {
      totalPrice: total,
      averagePrice: total / selectedCount
    };
  }

  sell() {
    const selectedCount = this.getSelectedOffers();
    const selectedOffersArray: any[] = [];
    console.log(this.offers);

    for (let i = 0; i < selectedCount; i++) {
      selectedOffersArray.push(this.offers[i].id);
    }

    this.productService.acceptOffers(selectedOffersArray).subscribe(res => {
      console.log(res);
    });
  }

  ngOnDestroy() {
    this.destroy$.next("");
    this.destroy$.unsubscribe();
  }
}
