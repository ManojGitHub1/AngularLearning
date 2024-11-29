import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckingComponent } from '../checking/checking.component';

@Component({
  selector: 'app-crew-members',
  standalone: true,
  imports: [CheckingComponent],
  templateUrl: './crew-members.component.html',
  styleUrl: './crew-members.component.scss'
})
export class CrewMembersComponent {
  messageFromCrewMembers: string = "Hello, crew members!";
  token: string = "1234567890";
  @Input() titleFromApp: string = "";

  @Output() messageFromCrewMembersOutput: EventEmitter<string> = new EventEmitter<string>();
  
  // received from checking component
  receivedMes: string = "";
  receivingMessage(message: string){
    this.receivedMes = message;
  }

  sendMessageCrewMember(){
    this.messageFromCrewMembersOutput.emit("Crew Member Message");
  }

}
