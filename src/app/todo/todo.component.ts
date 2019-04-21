import {Component, forwardRef, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorBase} from "../controlValueAccessor";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TodoComponent),
      multi: true
    }
  ]
})
export class TodoComponent extends ControlValueAccessorBase<any> implements OnInit {
  fg: FormGroup = this.fb.group({
    date: new FormControl(''),
    text: new FormControl('')
  });
  constructor(
    private fb: FormBuilder,
    private fd: FormGroupDirective
  ) {
    super();
  }

  ngOnInit() {
    console.log(this.fd.form);
    this.fg = this.fd.form;
  }

  public writeValue(val: any): void {
    val && this.fg.setValue(val, { emitEvent: false });
    this.fg.valueChanges.subscribe(value => {
      console.log('todo', value);
    });
  }
}
