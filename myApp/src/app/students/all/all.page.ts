import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service';
import {Student} from '../student.model';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {
  students: Student[];
  constructor(
      private studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.students = this.studentsService.allStudents;
  }

}
