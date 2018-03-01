import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profileimg='../assets/profilepic.jpg';
  receiverimg='../assets/receiver.jpg';
  attachmentimg='../assets/attachment.png';
  moreimg='../assets/more.png';
  chatimg='../assets/chat.png';
  contacts=[{"image":"../assets/receiver.jpg","name":"receiver1","status":"online","time":"2.23"},
    {"image":"../assets/receiver.jpg","name":"receiver2","status":"offline","time":"5.23"},
    {"image":"../assets/receiver.jpg","name":"receiver3","status":"online","time":"9.23"},
    {"image":"../assets/receiver.jpg","name":"receiver4","status":"offline","time":"12.23"}];
  curruntreceiverdetail:Object;

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

}
