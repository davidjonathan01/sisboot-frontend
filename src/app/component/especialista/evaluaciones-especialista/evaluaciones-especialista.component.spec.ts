import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionesEspecialistaComponent } from './evaluaciones-especialista.component';

describe('EvaluacionesEspecialistaComponent', () => {
  let component: EvaluacionesEspecialistaComponent;
  let fixture: ComponentFixture<EvaluacionesEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluacionesEspecialistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluacionesEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
