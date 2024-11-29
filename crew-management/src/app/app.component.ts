import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrewMembersComponent } from './MyComponents/crew-members/crew-members.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, CommonModule, FormsModule, CrewMembersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crew-management';

  // received from crew-members component
  receivedMessageCrewMembers: string = "";

  receivedCrew(receivedMessage: string){
    this.receivedMessageCrewMembers = receivedMessage;
  }

  // Directives
  a = 10;
  b = 20;
  items = [10, 20, 30, 40, 50];

  userRole = "admin";

  isActive = false;
  toogleActive(){
    this.isActive = !this.isActive;
  }

  backgroundColor = "blue";
  fontSize = "20";
  toggleSytle(){
    this.backgroundColor = 'pink';
    this.fontSize = '10';
  }

  name = "";

  // @Input() highlitedColor: string = "";
  highlitedColor: string = "";
  constructor(private el: ElementRef){
    console.log("Inside custom directive")
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlitedColor || "yellow");
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight("red");
  }
  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
