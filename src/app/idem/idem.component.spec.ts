import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdemComponent } from './idem.component';

describe('IdemComponent', () => {
  let component: IdemComponent;
  let fixture: ComponentFixture<IdemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
