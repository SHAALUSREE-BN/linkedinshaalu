import { EventEmitterService } from 'src/event-emitter.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTag: any;
  constructor(private db: AngularFireDatabase,private eventEmitterService: EventEmitterService) { }
  ngOnInit(): void {
  }
  
  async search() {    
    this.eventEmitterService.onFirstComponentButtonClick(this.searchTag);    
  }
}
