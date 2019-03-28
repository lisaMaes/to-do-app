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
  TaskUpdated1:EventEmitter<TodoItem> = new EventEmitter<TodoItem>();


  handleModifyItem(todo:TodoItem){

      this.TaskUpdated1.emit(todo);
  }

  constructor() { }

  ngOnInit() {
  }

}
