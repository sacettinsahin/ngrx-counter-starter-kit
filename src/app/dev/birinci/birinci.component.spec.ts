import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirinciComponent } from './birinci.component';

describe('BirinciComponent', () => {
  let component: BirinciComponent;
  let fixture: ComponentFixture<BirinciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirinciComponent]
    });
    fixture = TestBed.createComponent(BirinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
