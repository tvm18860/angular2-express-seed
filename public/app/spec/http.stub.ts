import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Mock http provider used for all components dependent on a service
export class MockHttp {
  private mockHttpProvider = {
    provide: Http,
    deps: [ MockBackend, BaseRequestOptions ],
    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
    }
  }

  providers: Array<any> = [ this.mockHttpProvider, BaseRequestOptions, MockBackend ];
}