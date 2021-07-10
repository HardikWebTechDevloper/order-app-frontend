import { Component, OnInit } from '@angular/core'
import { SortablejsOptions } from 'ngx-sortablejs'
const data: any = require('./data.json')

@Component({
  selector: 'vb-app-partials-jira-agile-board',
  templateUrl: './jira-agile-board.component.html',
  styleUrls: ['./jira-agile-board.component.scss'],
})
export class VbAppPartialsJiraAgileBoardComponent implements OnInit {
  tasks = data
  backlog = this.tasks.backlog
  todo = this.tasks.todo
  progress = this.tasks.progress
  completed = this.tasks.completed

  options: SortablejsOptions = {
    group: 'agile-board',
  }

  constructor() {}
  ngOnInit() {}
}
