import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentLocPage } from './current-loc.page';

describe('CurrentLocPage', () => {
  let component: CurrentLocPage;
  let fixture: ComponentFixture<CurrentLocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLocPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentLocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
