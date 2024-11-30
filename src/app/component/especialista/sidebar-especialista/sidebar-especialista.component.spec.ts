import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEspecialistaComponent } from './sidebar-especialista.component';

describe('SidebarEspecialistaComponent', () => {
  let component: SidebarEspecialistaComponent;
  let fixture: ComponentFixture<SidebarEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarEspecialistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
