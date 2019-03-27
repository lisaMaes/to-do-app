import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoItem} from "../model/TodoItem";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output()
  TaskAdded:EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output()
  ListRested:EventEmitter<void> = new EventEmitter<void>();


  handleClick(title){

    this.TaskAdded.emit(title);
  }

  handleReset(){
    this.ListRested.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
