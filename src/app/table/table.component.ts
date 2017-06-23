import { Component, OnInit } from '@angular/core';
import {PatientService} from '../share/service/patient/patient.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  patients;
  totalPages;
  lastPage;
  currentPage;
  firstPage;
  text;
  sort;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.initialise();
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
