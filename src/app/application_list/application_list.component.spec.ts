import { ComponentFixture, TestBed } from '@angular/core/testing';

import { application_list} from './application_list.component';

describe('application_listComponent', () => {
  let component: application_list;
  let fixture: ComponentFixture<application_list>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ application_list ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(application_list);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
