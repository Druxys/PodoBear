import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {StatStepPage} from './stat-step.page';

describe('StatStepPage', () => {
    let component: StatStepPage;
    let fixture: ComponentFixture<StatStepPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StatStepPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(StatStepPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
