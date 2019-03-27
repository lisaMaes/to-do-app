import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from "../model/TodoItem";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input()
  todo:TodoItem;

  @Output()
  ItemFinished:EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  endItem() {

    this.ItemFinished.emit(this.todo);


  }

  constructor() { }

  ngOnInit() {
  }

}
