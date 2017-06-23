import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PatientService {

  private endpoint = 'https://api.interview.healthforge.io/api/';

  constructor(private http: Http) { }

  extractData(res: Response) {
    return res.json();
  }

  getPatients(page: number, text: string, sort: string) {
    return this.http.get(this.endpoint + 'patient?' + 'page=' + page + '&lastName=' + text + '&sort=' + sort).map(this.extractData);
  }

  getPatientById(id: string) {
    return this.http.get(this.endpoint + 'patient/' + id).map(this.extractData);
  }


}
