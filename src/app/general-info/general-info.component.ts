import {Component} from '@angular/core';
import {ControlContainer} from '@angular/forms';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent {
  constructor(public controlContainer: ControlContainer) {
  }
}
