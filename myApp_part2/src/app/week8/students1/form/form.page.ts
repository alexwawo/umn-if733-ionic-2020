import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Student1} from '../../student1.model';
import {Students1Service} from '../../students1.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(private students1Srv: Students1Service, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);

    const student: Student1 = {
      nim: form.value.nim,
      nama: form.value.nama,
      prodi: form.value.prodi,
    };
    this.students1Srv.addStudent(student);
    this.router.navigateByUrl('/students1');
  }

}
