import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../../shared/form.service";
import {Router} from "@angular/router";
import {AlertService} from "../../shared/alert.service";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  form: FormGroup = this.fb.group({
    docType: ['passport'],
    series: [''],
    number: [''],
    extradition: [''],
    date: ['', Validators.required],
    seriesCertificate: [''],
    numberCertificate: [''],
    dateCertificate: [''],
    placeReg: [''],
    driverNumber: ['']
  })

  err = ''

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private router: Router,
    private alertService: AlertService
  ) {
  }

  ngOnInit(): void {

  }

  goPreviousPage() {
    this.router.navigate(['address'])
  }

  onSubmit() {
    if (this.form.invalid) {
      this.alertService.danger('Заполните все обязательные поля')
    } else {
      this.formService.formDocumentsValue = {...this.form.value}
      this.form.reset()
      this.router.navigate(['success'])
    }
  }
}


