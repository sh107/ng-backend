import { Component, OnInit } from '@angular/core';
import {PatientSecureService} from '../share/service/patient-secure/patient-secure.service';
import {timeInterval} from 'rxjs/operator/timeInterval';
declare var Keycloak: any;

@Component({
  selector: 'app-table-secure',
  templateUrl: './table-secure.component.html',
  styleUrls: ['./table-secure.component.css']
})
export class TableSecureComponent implements OnInit {

  patients;
  totalPages;
  lastPage;
  currentPage;
  firstPage;
  text;
  sort;

  constructor(private patientService: PatientSecureService) { }

  ngOnInit() {
    const keycloak = Keycloak('/assets/keycloak.json');
    window['_keycloak'] = keycloak;

    window['_keycloak'].init(
      {onLoad: 'login-required'}
    )

    // wait until token is loaded
    const timer = setInterval(() => {
        if (window['_keycloak'].token !== undefined ) {
          this.initialise();
          clearInterval(timer);
        }
      }, 50);


  }

  initialise() {
    this.text = '';
    this.sort = 'firstName ASC';
    this.getPatients(0, this.text, '');
  }

  getPatients(page: number, text: string, sort: string) {
    this.patientService.getPatients(page, text.toLocaleLowerCase(), sort).subscribe(
      data => {
        // console.log(data);
        this.patients = data.content;
        this.totalPages = data.totalPages;
        this.lastPage = this.totalPages;
        this.firstPage = 1;
        this.currentPage = page + 1;
      },
      error => {
        console.log(error);
      }
    );
  }

  getPatientsWithOffset(page: number) {
    return this.getPatients(page - 1, this.text, this.sort);
  }

  getPatientsWithSearch(text: string) {
    this.text = text;
    return this.getPatients(0, this.text, this.sort);
  }

  getPatientsBySorting(sort: string) {
    this.sort = sort;
    return this.getPatients(0, this.text, this.sort);
  }
}
