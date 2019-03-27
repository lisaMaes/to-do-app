import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from "../model/TodoItem";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo:TodoItem;


  handleEndItem(todo){

    todo.isDone = !todo.isDone;

  }

  constructor() { }

  ngOnInit() {
  }

}
