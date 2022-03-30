import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrograssBarComponent } from './prograss-bar.component';

describe('PrograssBarComponent', () => {
  let component: PrograssBarComponent;
  let fixture: ComponentFixture<PrograssBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrograssBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrograssBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
