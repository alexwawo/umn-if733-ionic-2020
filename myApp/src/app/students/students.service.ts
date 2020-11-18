import { Injectable } from '@angular/core';
import {Student} from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private students: Student[] = [
    {
      nim: '001',
      nama: 'John Thor',
      prodi: 'Informatika',
      foto: 'https://independent.media.clients.ellingtoncms.com/img/photos/2018/09/10/john_doe_-_jim_herrington_t958.jpg?fef15e12b784e9bbb22bf3f2924819218cda3d1a',
      email: ['john.thor@umn.ac.id', 'john.thor@email.com'],
      phone: ['08123456789']
    },
    {
      nim: '002',
      nama: 'John Wick',
      prodi: 'DKV',
      foto: 'https://uproxx.com/wp-content/uploads/2018/05/john-wick-31.jpg',
      email: ['john.wick@umn.ac.id'],
      phone: ['098989898989']
    },
    {
      nim: '003',
      nama: 'John Doe',
      prodi: 'SI',
      foto: 'https://uproxx.com/wp-content/uploads/2018/05/john-wick-31.jpg',
      email: [],
      phone: []
    }
  ];
  constructor() { }

  get allStudents() {
    return [...this.students];
  }

  getAllStudents() {
    return [...this.students];
  }

  getStudent(nim: string) {
    return this.students.find( student => {
      return student.nim === nim;
    });
  }

  deleteStudent(nim: string) {
    this.students = this.students.filter( student => {
      return student.nim !== nim;
    });
  }
}
