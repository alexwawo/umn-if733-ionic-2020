import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalSample1Component } from './modal-sample1.component';

describe('ModalSample1Component', () => {
  let component: ModalSample1Component;
  let fixture: ComponentFixture<ModalSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSample1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
