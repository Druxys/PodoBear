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
          this.data = res.datas;
          console.log(this.data)
    }, error => {
          console.log(error);
        })
  }

  createBarChart() {
    var datasArray = [];
    var i;
    for (i = 0; i <= this.data.length; i++) {
      datasArray[i] = this.data[i].positionX;
    }

    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 20, 35],
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
