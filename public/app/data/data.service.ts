import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(private http: Http) {}

  getData(): Observable<Array<number>> {
    return this.http.get(`/api/data`)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error): Observable<any> {
    return Observable.throw(error)
  }

}
