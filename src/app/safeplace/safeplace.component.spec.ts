import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeplaceComponent } from './safeplace.component';

describe('SafeplaceComponent', () => {
  let component: SafeplaceComponent;
  let fixture: ComponentFixture<SafeplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
