import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2'

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup
  public hasError = false
 

  constructor(private router: Router) { 
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-private HatthiServices: HatthiServicez0-9.-]+\.[a-z]{2,4}$/
    this.LoginForm = new FormGroup({
      Email: new FormControl('',[Validators.required, Validators.pattern(emailRegex)]),
      password: new FormControl('', [Validators.required])
    })
  
  }

  ngOnInit(): void {
  }

  adminLogin(){
   
    this.router.navigateByUrl('/admin/Dashboard')

  }

}
