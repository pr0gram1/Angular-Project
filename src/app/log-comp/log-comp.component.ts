import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { SignInData } from '../model/signInData';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'cf-log-comp',
  templateUrl: './log-comp.component.html',
  styleUrls: ['./log-comp.component.scss']
})
export class LogCompComponent implements OnInit {

  checkValidForm = false;
  ifCredsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(){
  }

  onSubmit(fSignIn: NgForm)   {
    if(!fSignIn.valid) {
      this.checkValidForm = true;
      this.ifCredsInvalid= false;
      console.log(fSignIn);
      return;

    }
this.checkCreds(fSignIn)  ;
}

  private checkCreds(fSignIn: NgForm) {
    
    const signInData = new SignInData(fSignIn.value.login, fSignIn.value.password);
    if(      
      !this.authenticationService.authenticate(signInData)){
      this.checkValidForm = false;
      this.ifCredsInvalid = true;

    }


  }

}
