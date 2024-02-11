import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGhostComponent } from './nav-ghost.component';

describe('NavGhostComponent', () => {
  let component: NavGhostComponent;
  let fixture: ComponentFixture<NavGhostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavGhostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavGhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
