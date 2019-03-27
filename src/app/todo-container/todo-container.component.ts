import { Component, OnInit } from '@angular/core';
import {TodoItem} from "../model/TodoItem";
import _ from "lodash";

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todos:Array<TodoItem> =[];
  i:number;


  handleAddTask(title:string){
    //copie le tableau et la nouvelle entrée
    this.todos = [...this.todos, new TodoItem(this.i, title, false)];

    this.i++;
  }

  handleResetAll(){
    this.todos = [];
  }

  handleUpdateTask(todo:TodoItem){

    //Trouve le todo dans le tableau
    const taskToUpdate:TodoItem = this.todos.find(item => item.id === todo.id);

    //l'enlève du tableau
    const arrayWithout:Array<TodoItem> = _.without(this.todos, taskToUpdate);


    //recrée un tableau avec le tableau without et l'objet modifié
    this.todos = [...arrayWithout, {...taskToUpdate, isDone: !taskToUpdate.isDone}].sort((a,b) => a.id - b.id);

  }

  constructor() { }

  ngOnInit() {
    this.i++;

  }

}
