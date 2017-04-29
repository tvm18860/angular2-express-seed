/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { OVERLAY_PROVIDERS, LIVE_ANNOUNCER_PROVIDER } from '@angular/material';
import { MockHttp } from '../../spec/http.stub';
import { DataService } from '../data.service';
import { DataComponent } from '../data.component';
import { Observable } from 'rxjs';

let fixture: ComponentFixture<DataComponent>;
let component: DataComponent;
let dataService: DataService;

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DataComponent ],
      providers: [ DataService, OVERLAY_PROVIDERS, LIVE_ANNOUNCER_PROVIDER].concat(new MockHttp().providers),
      schemas: [ NO_ERRORS_SCHEMA ]
    })

    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    dataService = TestBed.get(DataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make call to DataService on initialization', () => {
    spyOn(dataService, 'getData').and.returnValue(Observable.of([1,2,3]));
    fixture.detectChanges();
    expect(dataService.getData).toHaveBeenCalled();
  });
});
