import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      // Sauvegarder le fichier localement
      saveAs(this.selectedFile);
      alert('Fichier téléchargé avec succès');
    }
  }
}
