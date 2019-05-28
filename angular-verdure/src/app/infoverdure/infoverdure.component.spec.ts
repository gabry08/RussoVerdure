import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoverdureComponent } from './infoverdure.component';

describe('InfoverdureComponent', () => {
  let component: InfoverdureComponent;
  let fixture: ComponentFixture<InfoverdureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoverdureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoverdureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
