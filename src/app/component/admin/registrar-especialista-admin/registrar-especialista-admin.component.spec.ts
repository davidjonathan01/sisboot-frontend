import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEspecialistaAdminComponent } from './registrar-especialista-admin.component';

describe('RegistrarEspecialistaAdminComponent', () => {
  let component: RegistrarEspecialistaAdminComponent;
  let fixture: ComponentFixture<RegistrarEspecialistaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarEspecialistaAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarEspecialistaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
