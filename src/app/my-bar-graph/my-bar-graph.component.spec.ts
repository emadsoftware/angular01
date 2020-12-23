import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBarGraphComponent } from './my-bar-graph.component';

describe('MyBarGraphComponent', () => {
  let component: MyBarGraphComponent;
  let fixture: ComponentFixture<MyBarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBarGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
