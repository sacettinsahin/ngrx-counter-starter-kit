import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkinciComponent } from './ikinci.component';

describe('IkinciComponent', () => {
  let component: IkinciComponent;
  let fixture: ComponentFixture<IkinciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IkinciComponent]
    });
    fixture = TestBed.createComponent(IkinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
