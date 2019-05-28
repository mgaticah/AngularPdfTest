import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { load } from '@angular/core/src/render3';
import { LoadStatus } from '../utils/enums';
import { PDFDocumentProxy, PDFProgressData } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-pdf-renderer',
  templateUrl: './pdf-renderer.component.html',
  styleUrls: ['./pdf-renderer.component.scss']
})
export class PdfRendererComponent implements OnChanges {
  @Input() pdfSrc: any;
  @Output() loadedEvent: EventEmitter<boolean> = new EventEmitter();
  statusText: string;
  loadStatus: LoadStatus;
  constructor() { }
  validatedSrc:any;
  ngOnChanges(changes:SimpleChanges)
  {
    console.log(changes);
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


