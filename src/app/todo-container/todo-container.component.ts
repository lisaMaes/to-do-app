import { Component, OnInit } from '@angular/core';
import {TodoItem} from "../model/TodoItem";

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todos:Array<TodoItem> =[];

  handleAddTask(todo){

    this.todos.push(todo);
  }

  handleResetAll(){
    this.todos = [];
  }

  constructor() { }

  ngOnInit() {
  }

}
