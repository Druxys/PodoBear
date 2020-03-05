import {Component, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {draw, generate} from 'patternomaly'
import {ModalController} from "@ionic/angular";
import { StatStepPage } from '../stat-step/stat-step.page';
import {StatDistPage} from "../stat-dist/stat-dist.page";
import {SettingsPage} from "../settings/settings.page";


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

    constructor(public modalController : ModalController) {
    }

    ionViewDidEnter() {
        this.createBarChart();
    }

    createBarChart() {
        this.bars = new Chart(this.barChart.nativeElement, {
            type: 'doughnut',
            data: {
              labels: [
                'Actif',
                'Inactif'
              ],
                datasets: [{
                    data: [10, 30],
                  backgroundColor: [
                    '#5DAEB3', '#826251'
                  ],
                }],



            },
            options: {
                legend: {
                    display: false
                }}
        });
    }

    async openModalSteps() {
        const modal = await this.modalController.create({
            component: StatStepPage,
        });
        return await modal.present();
    }

    async openModalDist() {
        const modal = await this.modalController.create({
            component: StatDistPage,
        });
        return await modal.present();
    }

    async openModalSettings() {
        const modal = await this.modalController.create({
            component: SettingsPage,
        });
        return await modal.present();
    }
}
