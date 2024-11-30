import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePacienteComponent } from './profile-paciente.component';

describe('ProfilePacienteComponent', () => {
  let component: ProfilePacienteComponent;
  let fixture: ComponentFixture<ProfilePacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
