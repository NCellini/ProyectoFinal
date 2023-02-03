import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.Interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  // to do: Reformular como una lista de tareas

  task1: ITask = {
    title: 'Task 1',
    description: 'Description 1',
    completed: false,
    level: Levels.Info
  }

  task2: ITask = {
    title: 'Task 2',
    description: 'Description 2',
    completed: true,
    level: Levels.Urgent
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: ITask) {
  // to do: Sustituir por un Splice para eliminar de la lista de tareas.
    alert('Task deleted: ' + task.title);
  }

}

