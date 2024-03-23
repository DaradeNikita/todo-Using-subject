import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { Itodo } from '../../models/todo.model';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
todoForm ! : FormGroup;
isInEditMode : boolean = false;
todoItem !:string;
editObj !:Itodo 
  constructor(private _todoService : TodoService,private _uuidService : UuidService,
    private _snackBar : SnackBarService
    ) { }

  ngOnInit(): void {
   this.createTodoForm()
   this._todoService.todoSub$
     .subscribe(res => {
      console.log(res);
      this.todoItem = res.todoItem
      this.editObj = res
      this.isInEditMode = true;
      this.todoForm.patchValue(res)
      
     })
    
  }

  createTodoForm(){
    this.todoForm = new FormGroup({
      todoItem : new FormControl(null,[Validators.required])
    })
  }
  onformSubmit(){
    if(this.todoForm.valid){
        let data :Itodo = {...this.todoForm.value , todoId : this._uuidService.idGenerator()}
        this.todoForm.reset()
        console.log(data)
      this._todoService.sendTodo(data)
    }
  }

  onTodoItemUpdate(){


    let updateObj = {...this.todoForm.value,todoId : this.editObj.todoId }
     console.log(updateObj);
    this._todoService.updateobjtodo(updateObj)
    this.isInEditMode = false;
    this.todoForm.reset()
    this._snackBar.openSnackBar(`${this.todoItem} is updated to ${updateObj.todoItem} `,'close')
  }

}
