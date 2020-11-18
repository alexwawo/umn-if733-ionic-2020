import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreationsPage } from './creations.page';

describe('CreationsPage', () => {
  let component: CreationsPage;
  let fixture: ComponentFixture<CreationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
