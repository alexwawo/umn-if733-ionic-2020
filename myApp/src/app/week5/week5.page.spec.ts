import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Week5Page } from './week5.page';

describe('Week5Page', () => {
  let component: Week5Page;
  let fixture: ComponentFixture<Week5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Week5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Week5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
