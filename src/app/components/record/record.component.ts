import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'id', 'usedleaves', 'Leftleaves','extraleaves'];
  dataSource = ELEMENT_DATA;


  constructor() { 
   
  }

  ngOnInit() {
  }
 
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [5, 2, 4, 4, 5, 2, 7, 8], label: 'Off Day Trend 2020' }
  ];

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public randomize(): void {
      // Only Change 3 values
      const data = [
        Math.round(Math.random() * 100),
        59,
        80,
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40];
      this.barChartData[0].data = data;
    }
}
export interface PeriodicElement {
  name: string;
  ID: number;
  Usedleaves: number;
  Leftleaves: number;
  extraleaves:number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'smith', ID: 55076, Usedleaves: 3, Leftleaves:3,extraleaves:2},
  {name: 'Jack', ID: 76898, Usedleaves:6, Leftleaves: 6,extraleaves:2},
  {name: 'Anne', ID: 71268, Usedleaves: 6,Leftleaves: 6,extraleaves:2},
  {name: 'Rock', ID: 76869, Usedleaves: 9, Leftleaves: 3,extraleaves:2},
  {name: 'Janni', ID: 86798, Usedleaves: 2, Leftleaves: 10,extraleaves:2},
  {name: 'Devid', ID: 57896, Usedleaves: 7, Leftleaves: 5,extraleaves:2},
  {name: 'Maic', ID: 61276, Usedleaves: 6, Leftleaves: 6,extraleaves:2},
  
];
