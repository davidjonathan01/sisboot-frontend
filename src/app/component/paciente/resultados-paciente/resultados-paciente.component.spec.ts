import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPacienteComponent } from './resultados-paciente.component';

describe('ResultadosPacienteComponent', () => {
  let component: ResultadosPacienteComponent;
  let fixture: ComponentFixture<ResultadosPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadosPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
