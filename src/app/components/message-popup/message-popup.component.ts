import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-popup',
  templateUrl: './message-popup.component.html',
  styleUrls: ['./message-popup.component.css']
})
export class MessagePopupComponent implements OnInit {
  show = false;
  constructor() { }

  ngOnInit(): void {
  }
  openForm(){
    this.show = true;
  }
  closeForm(){
    this.show = false;
  }
}
