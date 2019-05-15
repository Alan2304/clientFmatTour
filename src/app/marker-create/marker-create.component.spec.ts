import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerCreateComponent } from './marker-create.component';

describe('MarkerCreateComponent', () => {
  let component: MarkerCreateComponent;
  let fixture: ComponentFixture<MarkerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
