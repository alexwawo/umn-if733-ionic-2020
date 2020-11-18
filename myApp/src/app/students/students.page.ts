import { Component, OnInit } from '@angular/core';
import {Student} from './student.model';
import {StudentsService} from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  students: Student[];
  constructor(private studentsService: StudentsService) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.students = this.studentsService.getAllStudents();
  }

}
