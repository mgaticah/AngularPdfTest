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
  @Input() pdfSrc: string;
  @Output() loadedEvent: EventEmitter<boolean> = new EventEmitter();
  statusText: string;
  loadStatus: LoadStatus;
  loadingPercentage:number;
  constructor() { }
  validatedSrc: string;
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'pdfSrc') {
        const change = changes[propName];
        const curVal = change.currentValue;
        const prevVal = change.previousValue;
        if (curVal != prevVal && curVal != undefined) {
          this.loadPdf(curVal);
        }
        else if(curVal==undefined)
        {
          this.loadedEvent.emit(false);
          this.statusText='No se ha definido archivo';     
        }
      }
    }
  }
  loadPdf(pdfSrc:string) {
    this.loadingPercentage=0;
    this.validatedSrc=pdfSrc;
   console.log(this.validatedSrc);
    this.loadedEvent.emit(false);
    // mock: cargando
    this.statusText = 'Cargando...';
    this.loadStatus = LoadStatus.Loading;
  }
  pdfLoaded(pdf: PDFDocumentProxy) {
    this.loadedEvent.emit(true);
    this.loadStatus = LoadStatus.Loaded;
    this.statusText = 'Cargado';
    
  }
  pdfLoadingError(error: any) {
    this.loadedEvent.emit(false);
    this.loadStatus = LoadStatus.Error;
    this.statusText = error.details;
    console.error(error);
  }
  onProgress(progressData: PDFProgressData) {
    this.loadingPercentage=(progressData.loaded/progressData.total)*100;
  }

}


