import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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
  accno = "Usename please"
  acno = ""
  pswd = ""
 
 
  //dependency Injection
  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }

  //USER DEFINED FUNCTION

  acnoChange(event: any) {
    this.acno = event.target.value
    console.log(this.acno);

  }
  pswdChange(event: any) {
    this.pswd = event.target.value
    console.log(this.pswd);

  }

  
      login()
       {
       var acno = this.acno
        var pswd = this.pswd
      const result = this.ds.login(acno,pswd)
    
        if (result)
         {
            alert("login sucessful")
            this.router.navigateByUrl('dashboard')
          }
  
          }
    
//template refrencing variable  



  //login(a:any,p:any)
        // {
         //  console.log(a.value);
           
          //var acno = a.value
         // var pswd = p.value
         //let db = this.db
      
         // if (acno in db)
         //  {
         //   if (pswd == db[acno]["password"]) 
         //   {
         //  alert("login sucessful")
         //   }
         //   else
         //   {
         //    alert("in correct password")
        //   }
       //   }
       //   else 
      //    {
     //      alert("user does not exist")
     //   }
    //   }




}
