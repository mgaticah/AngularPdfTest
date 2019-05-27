import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { load } from '@angular/core/src/render3';
import { LoadStatus } from '../utils/enums';
import { PDFDocumentProxy, PDFProgressData } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-pdf-renderer',
  templateUrl: './pdf-renderer.component.html',
  styleUrls: ['./pdf-renderer.component.scss']
})
export class PdfRendererComponent implements OnInit {
  @Input() pdfSrc: string;
  @Output() loadedEvent: EventEmitter<boolean> = new EventEmitter();
  statusText: string;
  loadStatus: LoadStatus;
  constructor() { }

  ngOnInit() {
    this.loadStatus = LoadStatus.Empty;
    if (this.pdfSrc !== undefined) {
      this.loadPdf();
      console.log(this.pdfSrc);
    }
  }
  loadPdf() {
    // mock: inicia carga
    this.loadedEvent.emit(false);
    // mock: cargando
    this.statusText = 'Cargando...';
    this.loadStatus = LoadStatus.Loading;    
  }
  pdfLoaded(pdf: PDFDocumentProxy) {
    this.loadedEvent.emit(true);
    this.loadStatus = LoadStatus.Loaded;
    this.statusText = 'Cargado!';

 }
 pdfLoadingError(error: any) {
  this.loadedEvent.emit(false);
  this.loadStatus = LoadStatus.Error;
  this.statusText = error.details;
  console.error(error);
}
onProgress(progressData: PDFProgressData) {
  // do anything with progress data. For example progress indicator
console.log(`{{progressData.loaded}} of {{progressData.total}}`);
}

}


