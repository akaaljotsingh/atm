import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SatCalendar, SatCalendarFooter, SatDatepicker } from 'saturn-datepicker';


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'id', 'usedleaves', 'Leftleaves','extraleaves'];
  dataSource = ELEMENT_DATA;

  form: FormGroup;
  // rangesFooter = RangesFooter;

  inlineRange;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      date: [{begin: new Date(2018, 7, 5), end: new Date(2018, 7, 25)}]
    });
  }

  inlineRangeChange($event) {
    this.inlineRange = $event;
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
    // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //   console.log(event, active);
    // }
  
    // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //   console.log(event, active);
    // }
  
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


      // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Used Leaves'],  'Left Leaves'];
  public pieChartData: number[] = [5, 7];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)'],
    },
  ];

// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

changeLabels() {
  const words = ['Used', 'Left'];
  const randomWord = () => words[Math.trunc(Math.random() * words.length)];
  this.pieChartLabels = Array.apply(null, { length: 2 }).map(_ => randomWord());
}

addSlice() {
  this.pieChartLabels.push(['Used', 'Left']);
  this.pieChartData.push(400);
  this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
}

removeSlice() {
  this.pieChartLabels.pop();
  this.pieChartData.pop();
  this.pieChartColors[0].backgroundColor.pop();
}

changeLegendPosition() {
  this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
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
