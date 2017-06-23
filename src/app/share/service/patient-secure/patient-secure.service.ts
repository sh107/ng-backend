import { Injectable } from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/Rx';

@Injectable()
export class PatientSecureService {

  private endpoint = 'https://api.interview.healthforge.io/api/secure/';

  constructor(private http: AuthHttp) { }

  getPatients(page: number, text: string, sort: string) {
    return this.http.get(this.endpoint + 'patient?' + 'page=' + page + '&lastName=' + text + '&sort=' + sort).map(res => res.json());
  }

  getPatientById(id: string) {
    return this.http.get(this.endpoint + 'patient/' + id).map(res => res.json());
  }


}
