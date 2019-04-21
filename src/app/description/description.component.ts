import {Component, forwardRef, OnInit} from '@angular/core';
import {
  ControlContainer, ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR,
  NgForm
} from '@angular/forms';
import {ControlValueAccessorBase} from "../controlValueAccessor";

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DescriptionComponent),
      multi: true
    }
  ]
})
export class DescriptionComponent extends ControlValueAccessorBase<string> implements OnInit {
  fc: FormControl = new FormControl('');
  constructor(
    private fd: FormGroupDirective
  ) {
    super();
  }

  ngOnInit() {
    console.log(this.fd.form);
    //this.fc = <FormControl> this.fd.form.get('description');
  }

  public writeValue(val: any): void {
    val && this.fc.setValue(val, { emitEvent: false });
    this.fc.valueChanges.subscribe(value => {
      console.log('description', value);
    });
  }
}
