import {Component, OnChanges, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-reactive',
  templateUrl: './registration-reactive.component.html',
  styleUrls: ['./registration-reactive.component.css']
})
export class RegistrationReactiveComponent implements OnInit,OnChanges {
signupform:FormGroup;
forbiddenusernames=['anna','abc'];
  constructor() { }

  ngOnInit() {
    this.signupform=new FormGroup({
      'userData':new FormGroup({
        'username':new FormControl('123a',[Validators.required,this.forbiddennames.bind(this)])
      }),
      'password':new FormControl(null,[Validators.required,Validators.email]),
      'hobbies':new FormArray([])
    });

    this.signupform.statusChanges.subscribe(
      (status)=>{
        console.log(status);
      }
    )
  }
  ngOnChanges(){

  }

  onsubmit(){
    console.log(this.signupform)
  }

  onaddhobby(){
    const control=new FormControl(null,Validators.required);
    (<FormArray>this.signupform.get('hobbies')).push(control)
  }

  forbiddennames(control:FormControl):{[s:string]:boolean}{
    if(this.forbiddenusernames.indexOf(control.value)!==-1){
      return {'nameIsForbbiden':true};
    }
    return null;
  }
}
