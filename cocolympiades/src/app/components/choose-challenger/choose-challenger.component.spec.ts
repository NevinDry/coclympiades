import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseChallengerComponent } from './choose-challenger.component';

describe('ChooseChallengerComponent', () => {
  let component: ChooseChallengerComponent;
  let fixture: ComponentFixture<ChooseChallengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseChallengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseChallengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
