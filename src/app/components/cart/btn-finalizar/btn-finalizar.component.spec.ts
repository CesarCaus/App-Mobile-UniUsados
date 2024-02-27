import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFinalizarComponent } from './btn-finalizar.component';

describe('BtnFinalizarComponent', () => {
  let component: BtnFinalizarComponent;
  let fixture: ComponentFixture<BtnFinalizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnFinalizarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnFinalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
