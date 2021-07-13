import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {PhoneInfoComponent} from './phone-info.component';

describe('PhoneInfoComponent', () => {
  let component: PhoneInfoComponent;
  let fixture: ComponentFixture<PhoneInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
