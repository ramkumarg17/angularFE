import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingnavComponent } from './slidingnav.component';

describe('SlidingnavComponent', () => {
  let component: SlidingnavComponent;
  let fixture: ComponentFixture<SlidingnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
