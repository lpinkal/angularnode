import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldemoComponent } from './modaldemo.component';

describe('ModaldemoComponent', () => {
  let component: ModaldemoComponent;
  let fixture: ComponentFixture<ModaldemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaldemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaldemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
