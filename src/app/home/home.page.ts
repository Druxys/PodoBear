import {Component, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {draw, generate} from 'patternomaly'

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    // @ts-ignore
    @ViewChild('barChart') barChart;

    bars: any;
    colorArray: any;

    constructor() {
    }

    ionViewDidEnter() {
        this.createBarChart();
    }

    createBarChart() {
        this.bars = new Chart(this.barChart.nativeElement, {
            type: 'doughnut',
            data: {
              labels: [
                'Red',
                'Yellow'
              ],
                datasets: [{
                    data: [10, 30],
                  backgroundColor: [
                    '#5DAEB3', '#826251'
                  ],
                }],



            },
            options: {}
        });
    }
}
