import {TodoItem} from "../model/TodoItem";
import _ from "lodash";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class TodoServices{

  i:number = 1;

  todos:Array<TodoItem> =[];


  async addTask(title:string):Promise<Array<TodoItem>>{

    //copie le tableau et la nouvelle entrée
    this.todos = [...this.todos, new TodoItem(this.i, title, false)];

    this.i++;

     return this.todos;
  }

  async resetAll():Promise<Array<TodoItem>>{

     this.todos = [];

     return this.todos;
  }

  async updateTask(task:TodoItem):Promise<Array<TodoItem>>{

    //Trouve le todo dans le tableau
    const taskToUpdate:TodoItem = this.todos.find(item => item.id === task.id);

    //l'enlève du tableau
    const arrayWithout:Array<TodoItem> = _.without(this.todos, taskToUpdate);


    //recrée un tableau avec le tableau without et l'objet modifié
    this.todos = [...arrayWithout, {...taskToUpdate, isDone: !taskToUpdate.isDone}].sort((a,b) => a.id - b.id);

    return this.todos;
  }
}
