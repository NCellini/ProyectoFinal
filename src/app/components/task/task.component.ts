import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.Interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask() {
    console.log('delete task', this.task?.title);
  }

}

