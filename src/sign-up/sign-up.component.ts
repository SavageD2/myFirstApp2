import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormDetail } from 'src/app/models/form.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormDetail = new FormDetail('','','','');
  formSubmitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myForm:NgForm){
    this.formSubmitted = true;
    console.log(this.signUpForm)
  }

}
