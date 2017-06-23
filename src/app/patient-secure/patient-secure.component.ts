import { Component, OnInit } from '@angular/core';
import {PatientSecureService} from '../share/service/patient-secure/patient-secure.service';
import {ActivatedRoute} from '@angular/router';
import {Patient} from '../share/model/patient';
declare var Keycloak: any;

@Component({
  selector: 'app-patient-secure',
  templateUrl: './patient-secure.component.html',
  styleUrls: ['./patient-secure.component.css']
})
export class PatientSecureComponent implements OnInit {

  id: string;
  patient: Patient;

  constructor(
    private activatedRoute: ActivatedRoute,
    private patientService: PatientSecureService
  ) {
    this.id = activatedRoute.snapshot.params['patientId'];

  }

  ngOnInit() {
    const keycloak = Keycloak('/assets/keycloak.json');
    window['_keycloak'] = keycloak;

    window['_keycloak'].init(
      {onLoad: 'login-required'}
    )

    // wait until token is loaded
    const timer = setInterval(() => {
      if (window['_keycloak'].token !== undefined ) {
        this.getPatientsById(this.id);
        clearInterval(timer);
      }
    }, 50);
  }

  getPatientsById(id: string) {
    this.patientService.getPatientById(id).subscribe(
      data => {
        // console.log(data);
        this.patient = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
