import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TituloCrearPublicacionComponent } from './titulo-crear-publicacion.component';

describe('TituloCrearPublicacionComponent', () => {
  let component: TituloCrearPublicacionComponent;
  let fixture: ComponentFixture<TituloCrearPublicacionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloCrearPublicacionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TituloCrearPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
