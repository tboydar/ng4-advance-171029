import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['hello', Validators.required],
      subtitle: 'world',
      people: this.fb.array([
        this.fb.group({
          name: '',
          title: '',
          email: ''
        })
      ])
    });
  }

  addPerson() {
    let people = this.form.get('people') as FormArray;
    people.push(
      this.fb.group({
        name: '',
        title: '',
        email: ''
      })
    );
  }
}
