import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  data: any = {
    title: 'hello',
    subtitle: 'angular',
    email: []
  };

  emails = ['a@gmail.com', 'b@email.com'];

  doSubmit(form: NgForm) {
    console.log('doSubmit');
    console.log(form);

  }
  constructor() { }

  ngOnInit() {
  }

}
