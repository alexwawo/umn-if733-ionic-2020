import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {
  constructor(private http: HttpClient) { }

  getAllStudents() {
    return this.http.get('http://localhost:8080/select.php');
  }

  getStudent(nim: string) {
    return this.http.get('http://localhost:8080/select1.php?nim=' + nim);
  }

  insertMhs(newMhs: any){
    const mhs = {
      nim: newMhs.nim,
      nama: newMhs.nama,
      prodi: newMhs.prodi
    };
    const data = JSON.stringify(mhs);
    return this.http.post<any>('http://localhost:8080/insert.php', data);
  }

  deleteMhs(nim: string){
    const data = JSON.stringify({id: nim});
    return this.http.post<any>('http://localhost:8080/delete.php', data);
  }

  updateMhs(objMhs) {
    const data = JSON.stringify(objMhs);
    return this.http.post<any>('http://localhost:8080/update.php', data);
  }
}
