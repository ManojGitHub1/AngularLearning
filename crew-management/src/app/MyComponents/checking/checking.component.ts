import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checking',
  standalone: true,
  imports: [],
  templateUrl: './checking.component.html',
  styleUrl: './checking.component.scss'
})
export class CheckingComponent {

  @Input() message: string = "";
  @Input() userToken: string = "";

  @Output() messageChecking: EventEmitter<string> = new EventEmitter<string>();

  sendMessage(){
    this.messageChecking.emit("Message sent successfully!");
  }

}
