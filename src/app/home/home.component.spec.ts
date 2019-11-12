import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmeComponent } from './home.component';

describe('HmeComponent', () => {
  let component: HmeComponent;
  let fixture: ComponentFixture<HmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
