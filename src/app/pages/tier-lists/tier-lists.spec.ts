import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierLists } from './tier-lists';

describe('TierLists', () => {
  let component: TierLists;
  let fixture: ComponentFixture<TierLists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TierLists]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TierLists);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
