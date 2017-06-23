import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../share/service/patient/patient.service';
import {Patient} from '../share/model/patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  id: string;
  patient: Patient;

  constructor(
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService
  ) {
    this.id = activatedRoute.snapshot.params['patientId'];
    // console.log(this.id);
    this.getPatientsById(this.id);

  }

  ngOnInit() {
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
