import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { LoadStatus } from '../utils/enums';
import { PDFDocumentProxy, PDFProgressData } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-pdf-renderer',
  templateUrl: './pdf-renderer.component.html',
  styleUrls: ['./pdf-renderer.component.scss']
})
export class PdfRendererComponent implements OnChanges {

  @Input() pdfSrc: string;
  @Input() emptyStatusText: string = 'No se ha definido un archivo';
  @Input() loadingStatusText: string = 'Cargando...';
  @Input() loadedStatusText: string = 'Archivo cargado';
  @Input() currentPageNumber: number = 1;
  @Input() renderText: boolean = false;
  @Input() showAllPages: boolean = false;
  @Input() showPageButtons: boolean = true;
  @Output() loadedEvent: EventEmitter<boolean> = new EventEmitter();

  pagesNumber: number;
  loadingPercentage: number;
  validatedSrc: string;
  statusText: string;
  loadStatus: LoadStatus;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'pdfSrc') {
        const change = changes[propName];
        const curVal = change.currentValue;
        const prevVal = change.previousValue;
        if (curVal != prevVal && curVal != undefined) {
          this.loadPdf(curVal);
        }
        else if (curVal == undefined) {
          this.loadedEvent.emit(false);
          this.statusText = this.emptyStatusText;
          this.loadStatus = LoadStatus.Empty;
        }
      }
    }
  }
  loadPdf(pdfSrc: string) {
    this.loadingPercentage = 0;
    this.validatedSrc = pdfSrc;
    this.loadedEvent.emit(false);
    this.statusText = this.loadingStatusText;
    this.loadStatus = LoadStatus.Loading;
  }
  pdfLoaded(pdf: PDFDocumentProxy) {
    this.loadedEvent.emit(true);
    this.loadStatus = LoadStatus.Loaded;
    this.statusText = this.loadedStatusText;
    this.pagesNumber = pdf.numPages;
  }
  pdfLoadingError(error: any) {
    this.loadedEvent.emit(false);
    this.loadStatus = LoadStatus.Error;
    this.statusText = error.details;
    console.error(error);
  }
  onProgress(progressData: PDFProgressData) {
    this.loadingPercentage = (progressData.loaded / progressData.total) * 100;
  }
  goNextPage() {
    if (this.currentPageNumber < this.pagesNumber)
      this.currentPageNumber++;
  }
  goBackPage() {
    if (this.currentPageNumber > 1)
      this.currentPageNumber--;
  }

  onPan(event) {
    if (event.isFinal) {
      if (event.additionalEvent == 'panup' && this.currentPageNumber < this.pagesNumber)
        this.currentPageNumber++;
      else if (event.additionalEvent == 'pandown' && this.currentPageNumber > 1)
        this.currentPageNumber--;

    }

  }
}


