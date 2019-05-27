import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-pdf-renderer',
  templateUrl: './pdf-renderer.component.html',
  styleUrls: ['./pdf-renderer.component.scss']
})
export class PdfRendererComponent implements OnInit {
  @Input() src: string;
  @Output() loadedEvent: EventEmitter<boolean> = new EventEmitter();
  statusText: string;
  loadStatus: number;
  constructor() { }

  ngOnInit() {
    this.loadStatus = 0;
    if (this.src !== undefined) {
      this.loadPdf();
    }
  }
  loadPdf() {
    // mock: inicia carga
    this.loadedEvent.emit(false);
    // mock: cargando
    this.statusText = 'Cargando...';
    // mock: carga terminada
    this.loadedEvent.emit(true);
    this.loadStatus = 1;
    this.statusText = 'Cargado!';

  }


}
