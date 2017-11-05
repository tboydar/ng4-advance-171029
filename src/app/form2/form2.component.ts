import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  form: FormGroup;

  data = {
    title: 'Hello 2',
    subtitle: 'World 2',
    people: [
      { name: 'Will', tel: '0232423432', email: 'will.huang@example.com' },
      { name: 'John', tel: '0934834734', email: 'doggy@gmail.com' }
    ]
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      subtitle: '',
      people: this.fb.array([
        this.fb.group({
          name: '',
          title: '',
          email: ''
        })
      ])
    });

    this.form.reset(this.data);

  }

  addPerson() {
    const people = this.form.get('people') as FormArray;
    people.push(
      this.fb.group({
        name: '',
        title: '',
        email: ''
      })
    );
  }
}
