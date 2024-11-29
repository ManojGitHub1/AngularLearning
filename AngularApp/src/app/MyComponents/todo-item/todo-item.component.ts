import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  // Input as todos is an array of Todo objects 
  @Input() todo?: Todo;
  @Input() i?: number;
  // Output as delete is an EventEmitter of type Todo
  // @Output() todoDelete: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() todoDelete = new EventEmitter<Todo>
  @Output() todoCheckbox = new EventEmitter<Todo>

  // Event Handler
  onDelete(todo: Todo){
    // Event Emitter
    // So todo-item Emites to todo to delete a todo
    this.todoDelete.emit(todo);
    console.log("Delete pressed")
  }

  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);
    console.log("checkbox pressed")
  }
}
