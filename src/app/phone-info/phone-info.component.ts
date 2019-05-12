import {Component} from '@angular/core';
import {ControlContainer} from '@angular/forms';

@Component({
  selector: 'app-phone-info',
  templateUrl: './phone-info.component.html',
  styleUrls: ['./phone-info.component.css']
})
export class PhoneInfoComponent {

  constructor(public controlContainer: ControlContainer) {
  }
}
