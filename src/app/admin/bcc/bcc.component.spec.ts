import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BccComponent } from './bcc.component';

describe('BccComponent', () => {
  let component: BccComponent;
  let fixture: ComponentFixture<BccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
