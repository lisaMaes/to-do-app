import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from "../model/TodoItem";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos:Array<TodoItem>;

  @Output()
  TaskUpdated:EventEmitter<TodoItem> = new EventEmitter<TodoItem>();


  handleModifyItem(todo:TodoItem){
      this.TaskUpdated.emit(todo);
  }

  constructor() { }

  ngOnInit() {
  }

}
