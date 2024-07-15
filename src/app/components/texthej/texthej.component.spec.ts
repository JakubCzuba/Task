import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexthejComponent } from './texthej.component';

describe('TexthejComponent', () => {
  let component: TexthejComponent;
  let fixture: ComponentFixture<TexthejComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexthejComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexthejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
