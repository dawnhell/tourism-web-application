import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaveListComponent } from './fave-list.component';

describe('FaveListComponent', () => {
  let component: FaveListComponent;
  let fixture: ComponentFixture<FaveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
