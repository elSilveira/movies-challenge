import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedRatingComponent } from './RoundedRatingComponent';

describe('RoundedRatingComponent', () => {
  let component: RoundedRatingComponent;
  let fixture: ComponentFixture<RoundedRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoundedRatingComponent]
    });
    fixture = TestBed.createComponent(RoundedRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
