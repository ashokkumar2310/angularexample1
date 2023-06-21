import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftrotationComponent } from './shiftrotation.component';

describe('ShiftrotationComponent', () => {
  let component: ShiftrotationComponent;
  let fixture: ComponentFixture<ShiftrotationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftrotationComponent]
    });
    fixture = TestBed.createComponent(ShiftrotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
