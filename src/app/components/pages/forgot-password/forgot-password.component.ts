import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';

declare var $: any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  usuario: UserModel;

  constructor() {
    $('body').css({'background-color': '#4e73df', 'background-image': 'linear-gradient(180deg,#4e73df 10%,#224abe 100%', 'background-size': 'cover'});
    this.usuario = new UserModel();
  }

  ngOnInit() {
  }

  resetPassword( form: NgForm ) {
    if ( form.invalid ) {
      console.log('Invalid form');
      return;
    }

    console.log(form);
    console.log(this.usuario);
  }

}
