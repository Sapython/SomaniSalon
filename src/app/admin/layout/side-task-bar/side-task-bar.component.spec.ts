import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTaskBarComponent } from './side-task-bar.component';

describe('SideTaskBarComponent', () => {
  let component: SideTaskBarComponent;
  let fixture: ComponentFixture<SideTaskBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideTaskBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideTaskBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
