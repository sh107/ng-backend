import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSecureComponent } from './table-secure.component';

describe('TableSecureComponent', () => {
  let component: TableSecureComponent;
  let fixture: ComponentFixture<TableSecureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSecureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
