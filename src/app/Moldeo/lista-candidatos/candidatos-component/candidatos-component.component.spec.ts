import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosComponentComponent } from './candidatos-component.component';

describe('CandidatosComponentComponent', () => {
  let component: CandidatosComponentComponent;
  let fixture: ComponentFixture<CandidatosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatosComponentComponent]
    });
    fixture = TestBed.createComponent(CandidatosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
