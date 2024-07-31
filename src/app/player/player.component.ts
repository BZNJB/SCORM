import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  scormUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // URL du package SCORM hébergé localement, à modifier selon ton contexte
    const url = '//src/app/AllGolfExamples'; // Remplace par le chemin vers index.html
    this.scormUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
  }
}



