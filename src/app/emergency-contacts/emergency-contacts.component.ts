import {Component, OnInit} from '@angular/core';
import {ControlContainer} from '@angular/forms';

@Component({
  selector: 'app-emergency-contacts',
  templateUrl: './emergency-contacts.component.html',
  styleUrls: ['./emergency-contacts.component.css']
})
export class EmergencyContactsComponent {

  constructor(public controlContainer: ControlContainer) {
  }

}
