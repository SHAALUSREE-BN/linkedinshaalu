import { AppRoutingModule } from './../app-routing.module';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './../components/newsfeed/newsfeed.component';
import { MessagePopupComponent } from '../components/message-popup/message-popup.component';
import { FormsModule } from '@angular/forms';


const components = [
  NavbarComponent,
  NewsfeedComponent,
  MessagePopupComponent
];

@NgModule({
  declarations: [components],
  imports: [ 
    CommonModule,
    AppRoutingModule,
    FormsModule
   ],
  exports: [ components ]
})
export class ComponentModule { }
