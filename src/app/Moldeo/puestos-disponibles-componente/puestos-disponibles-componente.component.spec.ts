import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestosDisponiblesComponenteComponent } from './puestos-disponibles-componente.component';

describe('PuestosDisponiblesComponenteComponent', () => {
  let component: PuestosDisponiblesComponenteComponent;
  let fixture: ComponentFixture<PuestosDisponiblesComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuestosDisponiblesComponenteComponent]
    });
    fixture = TestBed.createComponent(PuestosDisponiblesComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
