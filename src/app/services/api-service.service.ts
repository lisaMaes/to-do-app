import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TodoItem} from "../model/TodoItem";

const  API_BASE_URL: string = 'http://localhost:3000/todos/'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getListTodos(){
    return this.http.get(`${API_BASE_URL}`);
  }

  resetAllTodos(todo){
    return this.http.delete(`${API_BASE_URL}${todo.id}`);
  }

  addTask(todo:TodoItem){
    return this.http.post(`${API_BASE_URL}`,todo);
  }

  updateTask(todo:TodoItem){
    return this.http.put(`${API_BASE_URL}${todo.id}`, todo);
  }
}
