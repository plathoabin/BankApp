import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  //formgrou
  depositForm = this.fb.group({
    
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })

  //formgroup

  withdrawForm = this.fb.group({
    
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })
  user:any

  
  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) 
  {
    this.user=this.ds.currentuser
   }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno"))
    {
      alert("Pleaser Log in")
      this.router.navigateByUrl("")
    }
  }

  deposit(){
    var acno=this.depositForm.value.acno
    var pswd=this.depositForm.value.pswd
    var amount=this.depositForm.value.amount

    const result = this.ds.deposit(acno,pswd,amount)
    if(this.depositForm.valid)
    {
      if(result)
    {
      alert(amount+" depositted successfully and new balance is: "+result)
    }
    }
    else
    {
      alert("invalid form")
    }

  }

  withdraw(){
    var acno=this.withdrawForm.value.acno
    var pswd=this.withdrawForm.value.pswd
    var amount=this.withdrawForm.value.amount

    if(this.withdrawForm.valid)
    {
      const result = this.ds.withdraw(acno,pswd,amount)
    if(result)
    {
      alert(amount+" debitted successfully and new balance is: "+result)
    } 
    }
    else
    {
      alert("invalid form")
    }
    
  }
  logout()
  {
    localStorage.removeItem("currentuser")
    localStorage.removeItem("currentAcno")
this.router.navigateByUrl("")
  }

}
