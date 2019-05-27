import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfRendererComponent } from './pdf-renderer.component';
import { PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
  declarations: [PdfRendererComponent],
  imports: [
    CommonModule,
    PdfViewerModule
  ],
  exports: [PdfRendererComponent]
})
export class PdfRendererModule { }
