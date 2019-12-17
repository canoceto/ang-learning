import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService

  ) {
  }

  ngOnInit() {
    this.messageForm = this.formBuilder.group(
      {
        name: ['',
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)
        ],
        job: ['', Validators.required]
      });
  }

  onSubmit(data) {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
    this.success = true;
    // this.dataService.addUser(data);
    // this.messageForm.reset();
  }
}
