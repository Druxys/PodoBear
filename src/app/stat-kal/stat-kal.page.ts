import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-stat-kal',
  templateUrl: './stat-kal.page.html',
  styleUrls: ['./stat-kal.page.scss'],
})
export class StatKalPage implements OnInit {

  // @ts-ignore
  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;


  constructor(navParams: NavParams, public viewCtrl: ModalController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
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
          data: [10, 20, 30, 40, 50, 60, 70],
        }],



      },
      options: {
        legend: {
          display: false
        }}
    });
  }

  ngOnInit() {
  }

}
