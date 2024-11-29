import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-add-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

    name: string = '';
    isChecked: boolean = false;
    selectedOption: string = '';
    dropDownOption: string = '';
    textAreaValue: string = '';
}
