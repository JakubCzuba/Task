import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomebuttonComponent } from './welcomebutton.component';

describe('WelcomebuttonComponent', () => {
  let component: WelcomebuttonComponent;
  let fixture: ComponentFixture<WelcomebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomebuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
