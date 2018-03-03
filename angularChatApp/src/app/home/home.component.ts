import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profileimg='../assets/profileimg.jpg';
  attachmentimg='../assets/attachment.png';
  moreimg='../assets/more.png';
  chatimg='../assets/chat.png';
  connectedimg='../assets/connected.jpg';
  contacts=[{"image":"../assets/receiver.jpg","name":"receiver1","status":"online","time":"2.23"},
    {"image":"../assets/receiver.jpg","name":"receiver2","status":"offline","time":"5.23"},
    {"image":"../assets/receiver.jpg","name":"receiver3","status":"online","time":"9.23"},
    {"image":"../assets/receiver.jpg","name":"receiver4","status":"offline","time":"12.23"},
    {"image":"../assets/receiver.jpg","name":"receiver4","status":"offline","time":"12.23"},
    {"image":"../assets/receiver.jpg","name":"receiver4","status":"offline","time":"12.23"},
    {"image":"../assets/receiver.jpg","name":"receiver4","status":"offline","time":"12.23"},
    {"image":"../assets/receiver.jpg","name":"receiver4","status":"offline","time":"12.23"}];
  curruntreceiverdetail:Object;
  msgs=["m1","m2","m3","m1","m2","m3","m1","m2","m3","m1","m2","m3","m1","m2","m3"];
  msgs1=["mn1","mn2","mn3","mn1","mn2","mn3","mn1","mn2","mn3","mn1","mn2","mn3","mn1","mn2","mn3"];

  constructor() { }

  ngOnInit() {
  }
  fun(){
    console.log('fun');
  }
  curruntreceiver(contact){
    this.curruntreceiverdetail=contact;
    console.log(this.curruntreceiverdetail);
  }

  addmsg(text){
    this.msgs1.push(text);
  }

}
