import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm)
  {
    console.log(form);
    if (form.value.userName === 'admin' && form.value.password === 'admin123'){
alert('Success');

    }
    else{
alert('fail');
    }         }

}
