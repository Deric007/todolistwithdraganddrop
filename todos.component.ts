import {CdkDragDrop, moveItemInArray, tranferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
cdkDropList
#todoList="cdkDropLIST"
  todos:Todo[];

  inputTodo:string = "";

  constructor() { }
  drop(event:CdkDragDrop<string[]>){
    if (event.previouscontainer === event.container){
      moveItemInArray(event.cotainer.data, event.previousIndex, event.currentIndex);
        }else
        tranferArrayItem(event.previouscontainer.data,
          event.container.data,
          event.previousIntex,
          event.currentIntex);
  }


  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
    
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    

    this.inputTodo = "";
    
  }
  

}
