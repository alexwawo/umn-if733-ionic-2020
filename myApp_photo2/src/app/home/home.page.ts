import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Platform} from '@ionic/angular';
import {Camera, CameraResultType, CameraSource, Capacitor} from '@capacitor/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<HTMLInputElement>;
  photo: SafeResourceUrl;
  isDesktop: boolean;
  constructor(
      private platform: Platform,
      private sanitizer: DomSanitizer,
      private storage: AngularFireStorage
  ) {
    const ref = this.storage.ref('photos/latestPhoto.jpg');
    ref.getDownloadURL().subscribe(res => {
      console.log('res', res);
      this.photo = res;
    });
  }

  ngOnInit() {
    if ((this.platform.is('mobile') && this.platform.is('hybrid')) || this.platform.is('desktop')) {
      this.isDesktop = true;
    }
  }

  async getPicture(type: string) {
    if (!Capacitor.isPluginAvailable('Camera') || (this.isDesktop && type === 'gallery')) {
      this.filePickerRef.nativeElement.click();
      return;
    }

    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      saveToGallery: true
    });
    console.log(image);
    this.photo = image.dataUrl;
    // this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    console.log('this.photo: ', this.photo);
  }

  onFileChoose(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    console.log(event);

    if (!file.type.match(pattern)) {
      console.log('File format not supported');
      return;
    }

    reader.onload = () => {
      this.photo = reader.result.toString();
    };
    reader.readAsDataURL(file);

  }

  upload() {
    const file = this.dataURLtoFile(this.photo, 'file');
    console.log('file:', file);
    const filePath = 'photos/latestPhoto.jpg';
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
  }

  // https://stackoverflow.com/questions/35940290/how-to-convert-base64-string-to-javascript-file-object-like-as-from-file-input-f
  dataURLtoFile(dataurl, filename) {

    const arr = dataurl.split(',');
    const    mime = arr[0].match(/:(.*?);/)[1];
    const    bstr = atob(arr[1]);
    let    n = bstr.length;
    const    u8arr = new Uint8Array(n);

    while (n--){
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, {type: mime});
  }

}
