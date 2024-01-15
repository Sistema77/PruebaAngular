import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistasComponenteComponent } from './entrevistas-componente.component';

describe('EntrevistasComponenteComponent', () => {
  let component: EntrevistasComponenteComponent;
  let fixture: ComponentFixture<EntrevistasComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrevistasComponenteComponent]
    });
    fixture = TestBed.createComponent(EntrevistasComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
