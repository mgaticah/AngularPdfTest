import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-renderer',
  templateUrl: './pdf-renderer.component.html',
  styleUrls: ['./pdf-renderer.component.scss']
})
export class PdfRendererComponent implements OnInit {
  @Input() src: string;
  constructor() { }

  ngOnInit() {
    console.log(this.src);
  }


}
