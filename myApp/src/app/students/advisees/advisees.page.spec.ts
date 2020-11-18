import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdviseesPage } from './advisees.page';

describe('AdviseesPage', () => {
  let component: AdviseesPage;
  let fixture: ComponentFixture<AdviseesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviseesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdviseesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
