import { LoginComponent } from "./login.component";
import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { RestapiService } from "../restapi.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import {of} from 'rxjs';
import { throwError } from 'rxjs';
describe("LoginComponent", () => {
  let mockLoginService;
  let component:LoginComponent;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, HttpClientTestingModule,FormsModule],
    }).compileComponents();
    mockLoginService= jasmine.createSpyObj(['login','validatePayment']);
    component= new LoginComponent(mockLoginService,router);
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it("should render title in a h1 tag", async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Login to Initiate Payments From Rabobank"
    );
  }));
  it("should have as title ", async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Login to Initiate Payments From Rabobank");
  }));
 
  it('login method success scenario testing',()=>{
   mockLoginService.login.and.returnValue(of(true));
  component.doLogin('test','password123');
  expect(mockLoginService.login).toHaveBeenCalled();
  });


  it('login method testing failure 401 error', () => {
   mockLoginService.login.and.returnValue(throwError({status: 401}));
   component.doLogin('test','password13');
   expect(mockLoginService.login).toHaveBeenCalled(); 
    });

    it('login method testing failure server error', () => {
      mockLoginService.login.and.returnValue(throwError({status: 0}));
      component.doLogin('test','password13');
      expect(mockLoginService.login).toHaveBeenCalled(); 
       });
});
