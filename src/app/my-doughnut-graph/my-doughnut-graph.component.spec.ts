import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDoughnutGraphComponent } from './my-doughnut-graph.component';

describe('MyDoughnutGraphComponent', () => {
  let component: MyDoughnutGraphComponent;
  let fixture: ComponentFixture<MyDoughnutGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDoughnutGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDoughnutGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
