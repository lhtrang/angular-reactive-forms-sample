import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employeeFormGroup: FormGroup;

  ngOnInit(): void {
    this.employeeFormGroup.valueChanges.subscribe(() => {
      console.log('app', this.employeeFormGroup.getRawValue());
    });
  }

  constructor(private formBuilder: FormBuilder) {
    this.employeeFormGroup = this.formBuilder.group({
      generalInfo: this.formBuilder.group({
        fullName: ['Trang Le'],
        address: ['Ho Chi Minh City, Viet Nam'],
        dateOfBirth: ['1888-07-07'],
        phoneInfo: this.formBuilder.group({
          mobilePhone: ['+84981111111'],
          homePhone: ['+84982222222']
        })
      }),
      emergencyContacts: this.formBuilder.array([['+84983333333'], ['+84984444444']])
    });
  }
}
