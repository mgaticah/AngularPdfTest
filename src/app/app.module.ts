import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PdfRendererModule} from '../lib/api_module';
import { PdfRendererClientComponent } from './pdf-renderer-client/pdf-renderer-client.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfRendererClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfRendererModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
