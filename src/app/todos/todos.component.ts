import {Component, forwardRef, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ControlValueAccessorBase} from "../controlValueAccessor";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TodosComponent),
      multi: true
    }
  ]
})
export class TodosComponent extends ControlValueAccessorBase<any> implements OnInit {
  fa: FormArray;
  // fg: FormGroup;
  constructor(
    private fd: FormGroupDirective,
    private fb: FormBuilder,
  ) {
    super();
    this.fa = this.fb.array([]);
    // this.fg = this.fb.group({
    //   0: this.fb.group({
    //     date: '1234-1-1',
    //     text: 'sleepy'
    //   })
    // });
  }

  ngOnInit() {
    this.fa = <FormArray> this.fd.form.get('todos');
    console.log(this.fd.form);
  }

  public writeValue(val: any): void {
    // val && this.fa.setValue(val, { emitEvent: false });
    // val && val.forEach((item, idx) => {
    //   // this.fa.push(this.fb.group({
    //   //   date: [item.date],
    //   //   text: [item.text]
    //   // }));
    //   const value = {};
    //   value[idx] = {
    //        date: new FormControl(item.date),
    //        text: new FormControl(item.text)
    //   };
    //   // this.fg.setValue(this.fb.group(value), { emitEvent: false });
    //   this.fg = this.fb.group(value);
    // });
  }

}
