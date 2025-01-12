import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerPublicacionesPage } from './ver-publicaciones.page';

describe('VerPublicacionesPage', () => {
  let component: VerPublicacionesPage;
  let fixture: ComponentFixture<VerPublicacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPublicacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
