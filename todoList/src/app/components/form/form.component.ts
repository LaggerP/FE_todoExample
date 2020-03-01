import {Component, OnInit} from '@angular/core';
import {TaskServices} from "../../services/task.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private taskToAdd: any;
  private allTasks: any;
  private newTask: any = {
    task: null,
    count: 1
  };

  constructor(private taskService: TaskServices) {
  }

  ngOnInit() {
    this.taskService.getAllTask().subscribe((res) => {
      this.allTasks = res.tasks;
      console.log(this.allTasks)
    })
  }

  addTask() {
    this.newTask = {
      task: this.taskToAdd,
      count: this.allTasks.length++,
    };
    if (this.newTask.task.length === null) {
      alert('Type something')
    } else {
      this.taskService.newTask(this.newTask).subscribe((res) => {
      }, err => console.log(err));
    }

  }

}
