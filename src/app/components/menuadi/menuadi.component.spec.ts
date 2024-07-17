import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuadiComponent } from './menuadi.component';

describe('MenuadiComponent', () => {
  let component: MenuadiComponent;
  let fixture: ComponentFixture<MenuadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuadiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
