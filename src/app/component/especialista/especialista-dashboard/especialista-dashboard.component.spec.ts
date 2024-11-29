import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistaDashboardComponent } from './especialista-dashboard.component';

describe('EspecialistaDashboardComponent', () => {
  let component: EspecialistaDashboardComponent;
  let fixture: ComponentFixture<EspecialistaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecialistaDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialistaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
