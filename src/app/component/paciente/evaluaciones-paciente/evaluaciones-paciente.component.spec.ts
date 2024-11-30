import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionesPacienteComponent } from './evaluaciones-paciente.component';

describe('EvaluacionesPacienteComponent', () => {
  let component: EvaluacionesPacienteComponent;
  let fixture: ComponentFixture<EvaluacionesPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluacionesPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluacionesPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
