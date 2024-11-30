import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPacienteAdminComponent } from './registrar-paciente-admin.component';

describe('RegistrarPacienteAdminComponent', () => {
  let component: RegistrarPacienteAdminComponent;
  let fixture: ComponentFixture<RegistrarPacienteAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarPacienteAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPacienteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
