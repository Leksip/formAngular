import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../../shared/form.service";
import {Router} from "@angular/router";

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
  err = ''

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private route: Router
  ) {
  }

  ngOnInit(): void {
    if (this.formService.formAddressValue) {
      this.form.patchValue(this.formService.formAddressValue)
    }
  }


  nextPage() {
    if (this.form.invalid) {
      this.err = 'Заполните все обязательные поля'
    } else {
      this.err = ''
      this.formService.formAddressValue = {...this.form.value}
      console.log(this.formService.formAddressValue)
      this.form.reset()
    }
  }


  test() {
    this.form.patchValue(this.formService.formAddressValue)
  }


  goPreviousPage() {
    this.route.navigate([''])
  }
}
