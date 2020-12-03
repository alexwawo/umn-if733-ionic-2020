import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocCoordinatePage } from './loc-coordinate.page';

describe('LocCoordinatePage', () => {
  let component: LocCoordinatePage;
  let fixture: ComponentFixture<LocCoordinatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocCoordinatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocCoordinatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
