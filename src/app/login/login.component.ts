import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //PROPERTIES
  aim = "Perfect Banking Partner"
  accno = "Account Number please"
  acno = ""
  pswd = ""

  loginForm=this.fb.group
  (
{
  acno :['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd :['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
}

  )
  
//dependency Injection
  constructor(private router:Router, private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  

//two way 
  login() {
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd

    const result = this.ds.login(acno,pswd)

    if (result) {
      alert("Login Successful")
        this.router.navigateByUrl('dashboard')
    }
    
  }


  


}
