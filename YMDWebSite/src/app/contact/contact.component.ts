import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
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
  
  constructor(private _formBuilder: FormBuilder) { }

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
  Send(){//TO DO
    this.SetSender();
    this.SetName();
    this.SetMessage();
    if(this.sender!="" && this.name!=""&& this.message!=""){
      console.log( "Email: "+this.sender+" Name: "+this.name+" Message: " + this.message);
      this.thirdFormGroup.reset();
    }
    else{
      console.log("KUR");
    }
    
  }
}
