import { Component, OnInit, Input } from '@angular/core';
import * as types from '../../../types';
import { MatProgressSpinnerModule } from '@angular/material';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent implements OnInit {
  @Input() project: types.Project;

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  currentPage = 0;

  constructor() {}

  ngOnInit() {}

  reveal(e: types.Build) {
    e.Selected = !e.Selected;
  }

  pageChanged($event: any) {
    this.currentPage = $event.pageIndex;
  }
}
