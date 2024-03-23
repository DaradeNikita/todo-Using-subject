import { Injectable, OnInit } from '@angular/core';
import { Itodo } from '../models/todo.model';
import { Subject } from 'rxjs';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit{
todoArray:Array<Itodo> = [];
todoSub$:Subject<Itodo> = new Subject<Itodo>()

  constructor(private _snackBar : SnackBarService) { }
  ngOnInit(): void {

  }
  getAllTodo(){
    return this.todoArray;
  }
 
  sendTodo(todo : any){
   this.todoArray.unshift(todo)
   this._snackBar.openSnackBar(`${todo.todoItem} is added in todo list`,'close')
    }
  
    updateobjtodo(updatevalue: Itodo) {
      for (const key of this.todoArray) {
        if (key.todoId === updatevalue.todoId) {
         let update= key.todoItem = updatevalue.todoItem
         console.log(update);
        
        }
  
      }
    }
    removedata(remoitem:Itodo){
      let getindex=this.todoArray.findIndex(ele=>ele.todoId===remoitem.todoId)
      this.todoArray.splice(getindex,1)
      this._snackBar.openSnackBar(`${remoitem.todoItem} is removed from todo list`,'close')
    }
}
