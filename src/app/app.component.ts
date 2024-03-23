import { Component, OnInit } from '@angular/core';
import { Itodo } from './shared/models/todo.model';
import { UuidService } from './shared/services/uuid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 todoItemarr! : Array<Itodo> 
  title = 'todoServices';
  constructor(private _uuidService : UuidService){}

  ngOnInit(): void {
    
  }

}
