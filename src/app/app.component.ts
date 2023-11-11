import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Angular Project';
  // name='Sandeep Gaur';
  // date=new Date();

  // constructor(){
  //   console.log("constructor called!!!")
  // }
  todoValue!: string;
  list!: Todo[];

  ngOnInit(){
    this.list=[];
    this.todoValue="";
  }

  addItem(){
    if(this.todoValue!="")
    {
      const newItem: Todo ={
        id: Date.now(),
        value:this.todoValue,
        isDone:false
      };
      this.list.push(newItem);
    }
    this.todoValue="";
  }

  deleteItem(id:number){
    this.list=this.list.filter(item=>item.id!==id);
  }

  
}
