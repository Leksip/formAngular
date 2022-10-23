import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../../form.service";

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  form: FormGroup = this.fb.group({
    firstName: [null, Validators.required],
    secondName: [null, Validators.required],
    birthday: [null, Validators.required],
    phoneNumber: ['+7', [Validators.required, Validators.minLength(12)]],
    clientGroup: [null, Validators.required]
  })
  err = ''

  constructor(
    private fb: FormBuilder,
    private formService: FormService
  ) {
  }

  ngOnInit(): void {
  }

  currentNumber() {
    if (this.form.get('phoneNumber').value?.length < 2) {
      this.form.get('phoneNumber').patchValue('+7')
    }
    console.log(this.form.value.phoneNumber)
  }

  onSubmit() {
    if (this.form.invalid) {
      this.err = 'Заполните все обязательные поля'
    } else {
      this.err = ''
      this.formService.formOneValue = {...this.form.value}
      console.log(this.formService.formOneValue)
      this.form.reset()
      this.form.get('phoneNumber').patchValue('+7')
    }
  }

  test() {
    this.form.patchValue(this.formService.formOneValue)
  }
}
