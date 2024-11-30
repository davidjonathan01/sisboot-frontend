import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEspecialistaComponent } from './profile-especialista.component';

describe('ProfileEspecialistaComponent', () => {
  let component: ProfileEspecialistaComponent;
  let fixture: ComponentFixture<ProfileEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEspecialistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
