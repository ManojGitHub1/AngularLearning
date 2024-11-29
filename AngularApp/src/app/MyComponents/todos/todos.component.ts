import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Todo } from '../../todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { TodoAddComponent } from "../todo-add/todo-add.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoAddComponent], // Add CommonModule here
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'] // Use styleUrls (plural)
})

export class TodosComponent {
  title = 'Firstapp';
  localItem: string | null;
  todos: Todo[];

  constructor() {
    // this.todos = [
    //   { sno: 1, title: "Todo 1", desc: "This is first todo", active: true },
    //   { sno: 2, title: "Todo 2", desc: "This is second todo", active: true },
    //   { sno: 3, title: "Todo 3", desc: "This is third todo", active: true }
    // ];

    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItem)
    }

  }

  deleteTodo(todo:Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
