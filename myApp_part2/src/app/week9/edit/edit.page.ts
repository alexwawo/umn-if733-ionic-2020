import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MahasiswaService} from '../mahasiswa.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  nim: string;
  mahasiswa: any;

  @ViewChild('f', null) f: NgForm;

  constructor(private activatedRoute: ActivatedRoute, private mhsSrv: MahasiswaService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('nim')) { return; }
      const nim = paramMap.get('nim');
      this.nim = nim;

      console.log(this.nim);
      this.mhsSrv.getStudent(this.nim).subscribe((res) => {
        this.mahasiswa = res[0];
        console.log(this.mahasiswa);
      });

    });
  }

  // set form value
  ionViewDidEnter() {
    this.f.setValue(this.mahasiswa);
  }

  onSubmit(form: NgForm) {
    console.log(form);

    this.mhsSrv.updateMhs(form.value).subscribe(res => {
      console.log(res);
    });

    form.reset();
    this.router.navigateByUrl('/index');
  }

}
