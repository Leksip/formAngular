import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../../shared/form.service";
import {Router} from "@angular/router";
import {AlertService} from "../../shared/alert.service";

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  form: FormGroup = this.fb.group({
    index: [null],
    country: [null],
    area: [null],
    city: [null, Validators.required],
    street: [null],
    house: [null],
  })

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private router: Router,
    private alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    if (this.formService.formAddressValue) {
      this.form.patchValue(this.formService.formAddressValue)
    }
  }


  nextPage() {
    if (this.form.invalid) {
      this.alertService.danger('Заполните все обязательные поля')
    } else {
      this.formService.formAddressValue = {...this.form.value}
      console.log(this.formService.formAddressValue)
      this.form.reset()
      this.alertService.success('Поля успешно заполнены')
      this.router.navigate(['documents'])
    }
  }


  goPreviousPage() {
    this.router.navigate([''])
  }
}
