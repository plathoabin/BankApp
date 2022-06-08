import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentuser:any
  //DATABASE
  db: any = {
    1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000 },
    1001: { "acno": 1001, "username": "Laisha", "password": 1001, "balance": 5000 },
    1002: { "acno": 1002, "username": "Vypm", "password": 1002, "balance": 3000 }
  }

  constructor() { }
 // save details()
 saveDetails()
 {
if(this.db)
{
  localStorage.setItem("database",JSON.stringify(this.db))
}
if(this.currentuser)
{
  localStorage.setItem("currentuser",JSON.stringify(this.currentuser))
}
 }
  //login
  login(acno: any, pswd: any)
   {

    let db = this.db

    if (acno in db) 
    {
      if (pswd == db[acno]["password"])
       {
         this.currentuser = db[acno]["username"]
         this.saveDetails()
        return true

      }
      else 
      {
        alert("Incorrect Password")
        return false
      }
    }
    else 
    {
      alert("User does not exist!!!")
      return false
    }
  }

  //register
  register(username: any, acno: any, password: any) {
    let db = this.db

    if (acno in db) 
    {
      return false
    }
    else 
    {
      //insert in db
      db[acno] =
       {
        acno,
        username,
        password,
        "balance": 0
      }
      console.log(db)
      this.saveDetails()
      return true

    }
  }

  //deposit
  deposit(acno:any,password:any,amt:any){

    var amount = parseInt(amt)
    let db= this.db
    if(acno in db){

      if(password == db[acno]["password"])
      {

        db[acno]["balance"]+=amount
        console.log(db);
        this.saveDetails()
        return db[acno]["balance"]
      }
      else{
        alert("Incorrect Password")
        return false
      }
    }
    else{
      alert("User doesnot exist.....")
      return false
    }
  }


  withdraw(acno:any,password:any,amt:any){
    var amount = parseInt(amt)
    let db= this.db
    if(acno in db){

      if(password == db[acno]["password"])
      {

        if(db[acno]["balance"]>amount)
        {

          db[acno]["balance"]-=amount
          this.saveDetails()
          return db[acno]["balance"]
        }
        else{
          alert("Insufficient Balance")
        return false
        }

      }
      else{
        alert("Incorrect Password")
        return false
      }
    }
    else{
      alert("User doesnot exist.....")
      return false
    }
  }

}
