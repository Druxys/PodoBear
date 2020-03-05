import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../service/data.service";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // @ts-ignore
  @ViewChild('barChart') barChart;

  data;
  bars: any;
  colorArray: any;
  constructor(private dataService: DataService) { }

  ionViewDidEnter() {
    this.createBarChart();
  }

  ngOnInit() {
    this.dataService.getDatas()
        .subscribe((res: any) => {
          this.data = res;
          console.log(this.data)
    }, error => {
          console.log(error);
        })
  }

  createBarChart() {
    var limitDatas = this.data.length;
    var datasArray = [];
    var indexArray = [];
    var i;
    for (i = 0; i < limitDatas; i++) {
      datasArray[i] = this.data[i].positionX;
      indexArray[i] = i;
      console.log(datasArray);
    }

    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: indexArray,
        datasets: [{
          label: 'Viewers in millions',
          data: datasArray,
          backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
