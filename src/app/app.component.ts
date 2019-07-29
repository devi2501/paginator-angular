import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomValidator } from './shared/validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  formName: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formName = this.fb.group({
       numberInput: ['', [Validators.required, CustomValidator.numberValidator]]
    });
 }
}
