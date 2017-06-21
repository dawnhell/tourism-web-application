import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewStripComponent } from './preview-strip.component';

describe('PreviewStripComponent', () => {
  let component: PreviewStripComponent;
  let fixture: ComponentFixture<PreviewStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
