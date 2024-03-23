import { Component, EventEmitter, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Itodo } from '../../models/todo.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todoArr : Array<Itodo> = [];


  constructor(private _todoService : TodoService) { }

  ngOnInit(): void {
    this.todoArr = this._todoService.getAllTodo()
  // console.log(this.todoArr)
  }
  onTodoEdit(todo: Itodo){
   console.log(todo);
   this._todoService.todoSub$.next(todo)
  }
  onTodoRemove(todo: Itodo){
   this._todoService.removedata(todo)
  }

}

