import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

    constructor() { }
  
    ngOnInit(): void {
    }
    onSubmit()  {
    console.log("success")
//     if (form.value.DoctorName === '0'){
// alert('Success');

   }
  }