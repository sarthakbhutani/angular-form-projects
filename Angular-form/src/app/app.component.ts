import { Component } from '@angular/core';
import { user } from './user';
import { EnrollmentServerService } from './enrollment-server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics = [ 'Angular','React','Node'];
  public User = new user("Sarthak", "ahsbahb@as.com",9876899876,"default","Morning",true);
  public errorFlag = false;
  submitted = false;
  constructor(private _enrollmentServer : EnrollmentServerService){
    if(this.User.topicWanted=="default"){
      this.errorFlag = true;
    }
  }

  public formSubmit(){
    window.alert("Form submitted with data, name : "+this.User.name);
    console.log("submitted");
  }
  public ValidateTopic(value){
    if(value=="default"){
      this.errorFlag=true;
    } else{
      this.errorFlag=false;
    }
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.User);
    this._enrollmentServer.enroll(this.User)
    .subscribe(data => console.log("success"),
      error=> console.error("err"+error)
    );
  }
}
