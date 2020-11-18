import { Component, OnInit } from '@angular/core';
import {MahasiswaService} from '../mahasiswa.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  students: any;
  constructor(private mhsSrv: MahasiswaService) { }

  ngOnInit() {
    this.mhsSrv.getAllStudents().subscribe((res) => {
      this.students = res;
      console.log(res);
    });
  }

  delete(event, nim) {
      console.log(nim);
      this.mhsSrv.deleteMhs(nim).subscribe(res => {
        console.log(res);
      });
  }

}
