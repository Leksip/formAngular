import { Component, OnInit } from '@angular/core';
import {FormService} from "../../shared/form.service";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.formService.formDocumentsValue = null
    this.formService.formProfileValue = null
    this.formService.formAddressValue = null
  }

}
