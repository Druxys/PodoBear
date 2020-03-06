import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatKalPage } from './stat-kal.page';

describe('StatKalPage', () => {
  let component: StatKalPage;
  let fixture: ComponentFixture<StatKalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatKalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatKalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
