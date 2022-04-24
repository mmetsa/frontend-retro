import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroBoardDetailComponent } from './retro-board-detail.component';

describe('RetroBoardDetailComponent', () => {
  let component: RetroBoardDetailComponent;
  let fixture: ComponentFixture<RetroBoardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetroBoardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroBoardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
