import { Component, OnInit } from '@angular/core';
import {TodoItem} from "../model/TodoItem";
import TodoServices from "../services/TodoServices";

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todos:any[] =[];



  async handleAddTask(title:string){
     this.todos = await this.TodoServices.addTask(title);
  }

  async handleResetAll(){
     this.todos = await this.TodoServices.resetAll();
  }

  async handleUpdateTask(todo:TodoItem){

     this.todos = await this.TodoServices.updateTask(todo);

  }


  constructor(private TodoServices: TodoServices) { }

  async ngOnInit() {


    this.todos= await this.TodoServices.getListTodos();

  }

}
