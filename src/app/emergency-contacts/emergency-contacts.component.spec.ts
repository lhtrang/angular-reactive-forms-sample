import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyContactsComponent } from './emergency-contacts.component';

describe('EmergencyContactsComponent', () => {
  let component: EmergencyContactsComponent;
  let fixture: ComponentFixture<EmergencyContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
