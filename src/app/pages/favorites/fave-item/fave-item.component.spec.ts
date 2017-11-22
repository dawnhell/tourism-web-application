import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaveItemComponent } from './fave-item.component';

describe('FaveItemComponent', () => {
  let component: FaveItemComponent;
  let fixture: ComponentFixture<FaveItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaveItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
