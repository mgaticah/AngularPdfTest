import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfRendererClientComponent } from './pdf-renderer-client.component';

describe('PdfRendererClientComponent', () => {
  let component: PdfRendererClientComponent;
  let fixture: ComponentFixture<PdfRendererClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfRendererClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfRendererClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
