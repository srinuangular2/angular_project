/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListCntryComponent } from './list-cntry.component';

describe('ListCntryComponent', () => {
  let component: ListCntryComponent;
  let fixture: ComponentFixture<ListCntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
