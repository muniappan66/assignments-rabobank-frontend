import { Component, OnInit } from "@angular/core";
import { RestapiService } from "../restapi.service";
import { Router } from "@angular/router";
import {mockservice} from "./mockservice";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers:[RestapiService]
})
export class LoginComponent implements OnInit {
  title='Login to Initiate Payments From Rabobank';
  username: string;
  password: string;
  message: any;
  public failureMsg = "";
  public serverFailureMsg="serverMsg";
  name:string;

  constructor(private service: RestapiService, private router: Router) {};
  ngOnInit() {
  }

  
  doLogin(uname,psw){
    this.username=uname;
    this.password=psw;
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(
      (data) => {
        this.message = data;
        if (data == "Welcome") {
          this.router.navigate(["/payment"]);
        }
      },
      (error) => {
        if (error.status == 401) {
          this.failureMsg = "failure";
        }else if(error.status == 0){
          this.failureMsg = "server";
        }
      }
    );
  }

}
