import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image1:string="assets/images/BookAppointment.jpg";
  image2:string="assets/images/MyProfile.jpg";
  image3:string="assets/images/MyAppointments.jpg";
  image4:string="assets/images/Feedback.jpg";
  image5:string="assets/images/ContactUs.jpg";
  image6:string="assets/images/AboutUs.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}