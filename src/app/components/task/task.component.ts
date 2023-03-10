import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.Interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteTask() {
    // Notificamos al componeente superior la tarea a eliminar. 
    this.delete.emit(this.task);
  }

}

