import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-renderer-client',
  templateUrl: './pdf-renderer-client.component.html',
  styleUrls: ['./pdf-renderer-client.component.scss']
})
export class PdfRendererClientComponent implements OnInit {

  constructor() { }
  rendererLoadedStatus: boolean;
  ngOnInit() {
  }
  rendererLoadedEventReceiver($event) {
    this.rendererLoadedStatus = $event;
  }

}
