import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {HeaderInterceptorService} from "./services/header-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoContainerComponent,
    TodoItemComponent,
    CheckboxComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

