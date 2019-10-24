import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {ContactserviceService} from '../contactservice.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  sender="";
  name="";
  message = "";
   mail = {
    mailname: "",
    mailemail:  "",
    mailmessage:  ""
  }
  constructor(private _formBuilder: FormBuilder,private mailservice:ContactserviceService) { }

  ngOnInit() {
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl:['', Validators.required]
    });
  }
  SetSender(){
    this.sender = this.firstFormGroup.get('firstCtrl').value;
  }
  SetName(){
    this.name =  this.secondFormGroup.get('secondCtrl').value;
  }
  SetMessage(){
    this.message =  this.thirdFormGroup.get('thirdCtrl').value;
  }
  show(){
    console.log(this.sender);
  }
  Mail(){
    console.log(this.name);
    this.mail.mailemail = this.sender;
    this.mail.mailname = this.name;
    this.mail.mailmessage = this.message;
    
    console.log(this.name);
    this.mailservice.sendMail("http://localhost:3000/sendMail",this.mail).subscribe(
      data=>{
        let res:any = data;
        console.log(
          this.mail.mailname+'s mail has been sent'
        )
      }
    );
  }
}
