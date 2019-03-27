import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from "../model/TodoItem";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo:TodoItem;

  @Output()
  TaskUpdated:EventEmitter<TodoItem> = new EventEmitter<TodoItem>();


  handleUpdateTask(todo:TodoItem){
    this.TaskUpdated.emit(todo);

  }

  constructor() { }

  ngOnInit() {
  }

}
