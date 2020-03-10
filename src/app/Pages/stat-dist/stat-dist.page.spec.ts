import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {StatDistPage} from './stat-dist.page';

describe('StatDistPage', () => {
    let component: StatDistPage;
    let fixture: ComponentFixture<StatDistPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StatDistPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(StatDistPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
