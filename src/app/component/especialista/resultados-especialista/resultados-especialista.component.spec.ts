import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosEspecialistaComponent } from './resultados-especialista.component';

describe('ResultadosEspecialistaComponent', () => {
  let component: ResultadosEspecialistaComponent;
  let fixture: ComponentFixture<ResultadosEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadosEspecialistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
