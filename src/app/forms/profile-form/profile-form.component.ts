import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../../shared/form.service";
import {Router} from "@angular/router";
import {AlertService} from "../../shared/alert.service";


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  formInvalid:boolean = false

  form: FormGroup = this.fb.group({
    firstName: [null, Validators.required],
    secondName: [null, Validators.required],
    thirdName: [null],
    birthday: [null, Validators.required],
    sex: [null],
    doctors: [null],
    phoneNumber: ['+7', [Validators.required, Validators.minLength(12)]],
    clientGroup: [null, Validators.required],
    sms: [null]
  })

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private router: Router,
    private alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    if (this.formService.formProfileValue) {
      this.form.patchValue(this.formService.formProfileValue)
    }
  }

  currentNumber() {
    if (this.form.get('phoneNumber').value?.length < 2) {
      this.form.get('phoneNumber').patchValue('+7')
    }
  }

  nextPage() {
    if (this.form.invalid) {
      this.alertService.danger('Заполните все обязательные поля')
      this.formInvalid = true
    } else {
      this.formService.formProfileValue = {...this.form.value}
      this.form.reset()
      this.router.navigate(['address'])
      this.alertService.success('Поля заполнены')
      this.formInvalid = false

    }
  }


  test() {
    this.form.patchValue(this.formService.formProfileValue)
  }

  clearForm() {
    this.form.reset()
    this.form.get('phoneNumber').patchValue('+7')
  }
}
