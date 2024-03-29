import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOpenComponent } from './menu-open.component';

describe('MenuOpenComponent', () => {
  let component: MenuOpenComponent;
  let fixture: ComponentFixture<MenuOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuOpenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
