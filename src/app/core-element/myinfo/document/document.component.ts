import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/service/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent  implements OnInit {

  selectedFiles: FileList | undefined;
  currentFile: File | undefined;
  progress = 0;
  message = '';
  fileInfos!: Observable<any>;
  constructor(private uploadService: UploadFileService) { }
  
  ngOnInit() {
    this.fileInfos = this.uploadService.getFiles();
  } 
  selectFile(event : any) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;
    this.currentFile = this.selectedFiles?.item(0) as File;
    var reader = new FileReader();
    console.log(reader.result?.toString());
    reader.readAsDataURL(this.currentFile);
    console.log(reader.result?.toString());
  
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          // this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'File uploaded successfully!';
        this.currentFile = undefined;
      });
    this.selectedFiles  = undefined;
  }

}


