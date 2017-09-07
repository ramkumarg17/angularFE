import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidernavComponent } from './slidernav.component';

describe('SlidernavComponent', () => {
  let component: SlidernavComponent;
  let fixture: ComponentFixture<SlidernavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidernavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
