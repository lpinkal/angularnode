import {Component, ElementRef, OnInit} from '@angular/core';
import {ServerService} from "../server.service";
import {FileUploader} from "ng2-file-upload/ng2-file-upload"
import {Ng2ImgMaxService} from "ng2-img-max"
import "rxjs"
const URL = 'http://localhost:3000/upload';
@Component({
  selector: 'app-imagecomp',
  templateUrl: './imagecomp.component.html',
  styleUrls: ['./imagecomp.component.css']
})
export class ImagecompComponent implements OnInit{
  filesToUpload:Array<File>=[];
 // public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(private serverservice:ServerService,private el: ElementRef,private Ng2ImgMaxService:Ng2ImgMaxService) { }

  ngOnInit() {

    // this.uploader.onAfterAddingFile = (file) => {
    //   file.withCredentials = false;
    // };
    // this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
    //   console.log("ImageUpload:uploaded:", item, status, response);
    // }
  }

  upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    let fileCount: number = inputEl.files.length;

    if (fileCount > 0) {
      for(let i=0;i<fileCount;i++) {
        console.log(inputEl.files.item(i));
        this.Ng2ImgMaxService.resize([inputEl.files.item(i)], 400, 200).subscribe((result) => {

          let formData = new FormData();
            formData.append('uploads[]', inputEl.files.item(i));
            console.log(formData);
          this.serverservice.upload(formData).subscribe((success) => {
              alert(success);
              console.log(success);
              // this.myimagepath='/nodedemo/uploads/3b96bd485b08659a18849f4872b0389e';
            },
            (error) => alert(error));
          }
        );

     }
    }

    // const files: Array<File> = this.filesToUpload;
    // console.log(files);
    // let formData = new FormData();
    // for(let i =0; i < files.length; i++){
    //   this.Ng2ImgMaxService.resize([inputEl.files.item(i)], 400, 200).subscribe((result) => {
    //     formData.append("uploads[]", files[i], files[i]['name']);
    //   });
    //
    // }
    // this.serverservice.upload(formData).subscribe((success) => {
    //             alert(success);
    //             console.log(success);
    //             // this.myimagepath='/nodedemo/uploads/3b96bd485b08659a18849f4872b0389e';
    //           },
    //           (error) => alert(error));
  }
  changeListner(event) {
    this.filesToUpload = <Array<File>>event.target.files;
    let file = event.target.files;
    console.log(file.length);
    var div = this.el.nativeElement.querySelector('#imag');
    console.log(div);
    for (let i = 0; i < file.length; i++) {
      console.log(file[i]);
      let reader = new FileReader();
      reader.readAsDataURL(file[i]);

      reader.onload = function (e) {
        let image = new Image();
        image.height = 200;
        image.width = 300;
        image.title = file.name;
        image.src = reader.result;
        console.log(image);
        div.appendChild(image);
      }
    };
  }


}
