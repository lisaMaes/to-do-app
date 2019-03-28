import {TodoItem} from "../model/TodoItem";
import _ from "lodash";
import {Injectable} from "@angular/core";
import {ApiServiceService} from "./api-service.service";

@Injectable({
  providedIn: 'root'
})
export default class TodoServices{

  constructor(private ApiService :ApiServiceService){};

  i:number;

  todos:Array<TodoItem> =[];


  async addTask(title:string):Promise<Array<TodoItem>>{

    this.i++;

    let newOne:TodoItem = new TodoItem(this.i, title, false)

    let resp:any = await this.ApiService.addTask(newOne).toPromise();

    //copie le tableau et la nouvelle entrée
    this.todos = [...this.todos, newOne];



     return this.todos;
  }

  resetAll():Array<TodoItem>{

    this.todos.forEach(item => this.deleteOne(item));

    this.todos = [];

    this.i = 0;

     return this.todos;
  }

  async deleteOne(task: TodoItem){

    let resp:any = await this.ApiService.resetAllTodos(task).toPromise();

  }

  async updateTask(task:TodoItem):Promise<Array<TodoItem>>{

    //Trouve le todo dans le tableau
    const taskToUpdate:TodoItem = this.todos.find(item => item.id === task.id);

    //l'enlève du tableau
    const arrayWithout:Array<TodoItem> = _.without(this.todos, taskToUpdate);


    //recrée un tableau avec le tableau without et l'objet modifié
    this.todos = [...arrayWithout, {...taskToUpdate, isDone: !taskToUpdate.isDone}].sort((a,b) => a.id - b.id);

    let resp:any = await this.ApiService.updateTask({...taskToUpdate, isDone: !taskToUpdate.isDone}).toPromise();

    return this.todos;
  }

  async getListTodos(){

   // @ts-ignore
    const data: any[] = await this.ApiService.getListTodos().toPromise();

    this.todos = data.map(item => new TodoItem(item.id, item.title, item.isDone));

    this.i = this.todos[this.todos.length-1].id;

    return this.todos;
  }
}
