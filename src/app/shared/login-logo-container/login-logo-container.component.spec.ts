import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLogoContainerComponent } from './login-logo-container.component';

describe('LoginLogoContainerComponent', () => {
  let component: LoginLogoContainerComponent;
  let fixture: ComponentFixture<LoginLogoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLogoContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLogoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
