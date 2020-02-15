import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UserModel;

  constructor() {
    $('body').css({'background-color': '#4e73df', 'background-image': 'linear-gradient(180deg,#4e73df 10%,#224abe 100%', 'background-size': 'cover'});
    this.usuario = new UserModel();
  }

  ngOnInit() {
  }

  login( form: NgForm ) {
    if ( form.invalid ) {
      console.log('Invalid form');
      return;
    }
    
    console.log(form);
    console.log(this.usuario);
  }

}
