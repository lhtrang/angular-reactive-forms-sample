import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myToDoGroup: FormGroup;

  ngOnInit(): void {
    this.myToDoGroup.valueChanges.subscribe((value) => {
      console.log('app', value);
    });
  }

  constructor(
    private fb: FormBuilder,
  ) {
    this.myToDoGroup = this.fb.group({
      todo: this.fb.group({
        date: new FormControl('1888-07-07'),
        text: new FormControl('outside')
      }),
      todos: this.fb.array([
        this.fb.group({
          date: [new Date()],
          text: ['text 1']
        }),
        this.fb.group({
          date: ['1234-07-07'],
          text: ['text 2']
        })
      ]),
      description: ['ahihi'],
      checked: [true]
    });
  }
}
