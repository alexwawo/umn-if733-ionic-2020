import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayMapPage } from './display-map.page';

describe('DisplayMapPage', () => {
  let component: DisplayMapPage;
  let fixture: ComponentFixture<DisplayMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
