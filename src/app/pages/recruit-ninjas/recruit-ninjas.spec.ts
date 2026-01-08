import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitNinjas } from './recruit-ninjas';

describe('RecruitNinjas', () => {
  let component: RecruitNinjas;
  let fixture: ComponentFixture<RecruitNinjas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitNinjas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitNinjas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
