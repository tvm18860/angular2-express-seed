/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { DataService } from '../data.service';
import { MockHttp } from '../../spec/http.stub';

let dataService: DataService;
let backend: MockBackend;

describe('Service: Data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ DataService ].concat(new MockHttp().providers)
    });

    dataService = TestBed.get(DataService);
    backend = TestBed.get(MockBackend);
  });

  it('should make request to /api/data', () => {
    backend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toBe(RequestMethod.Get);
      expect(connection.request.url).toBe(`/api/data`);
    });

    dataService.getData();
  });
});
