import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-renderer-client',
  templateUrl: './pdf-renderer-client.component.html',
  styleUrls: ['./pdf-renderer-client.component.scss']
})
export class PdfRendererClientComponent implements OnInit {
  pdfUrl: string = 'http://localhost:4200/assets/sample.pdf';
  constructor() { }
  rendererLoadedStatus: boolean;
  ngOnInit() {
  }
  rendererLoadedEventReceiver($event) {
    this.rendererLoadedStatus = $event;
  }

}
