import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalController, NavParams} from "@ionic/angular";
import {Chart} from 'chart.js';

@Component({
  selector: 'app-stat-dist',
  templateUrl: './stat-dist.page.html',
  styleUrls: ['./stat-dist.page.scss'],
})
export class StatDistPage implements OnInit {
  // @ts-ignore
  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;

  constructor(navParams: NavParams,public viewCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: [
          'L',
          'M',
          'M',
          'J',
          'V',
          'S',
          'D'
        ],
        datasets: [{
          label : 'Cette semaine',
          borderColor: "red",
          fill: false,
          data: [10, 20, 30, 40, 50, 60, 70],
        },
          {
            label : 'Semaine dernière',
            fill: false,
            data: [10, 40, 30, 70, 50, 20, 10],
          },],



      },
      options: {
        legend: {
          display: false
        }}
    });
  }

}
