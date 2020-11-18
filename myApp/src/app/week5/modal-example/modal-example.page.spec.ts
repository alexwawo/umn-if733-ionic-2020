import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalExamplePage } from './modal-example.page';

describe('ModalExamplePage', () => {
  let component: ModalExamplePage;
  let fixture: ComponentFixture<ModalExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExamplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
