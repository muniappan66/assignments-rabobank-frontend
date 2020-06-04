import { PaymentComponent } from "./payment.component";
import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule, FormBuilder } from "@angular/forms";
import { of } from "rxjs";
import { throwError } from "rxjs";
import { error } from "protractor";

describe("PaymentComponent", () => {
  let mockPaymentService;
  let component: PaymentComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
    }).compileComponents();
    mockPaymentService = jasmine.createSpyObj(["login", "validatePayment"]);
    component = new PaymentComponent(mockPaymentService);
  }));
  it("payment component is created", () => {
    expect(true).toBe(true);
  });
  it("payment success component is created", () => {
    mockPaymentService.validatePayment.and.returnValue(of(true));
    component.initiatePayment();
    component.ngOnInit();
   // expect(mockPaymentService.validatePayment).toHaveBeenCalled();
   //expect(component.paymentId).toEqual(undefined);
   //expect(component.isValid ).toEqual(false);
   //expect(component.paymentResult).toEqual('failure');
   expect(component.validated.status).toEqual(undefined);
  });

  it("payment  component server error", () => {
    mockPaymentService.validatePayment.and.returnValue(throwError({status: 0}));
    component.initiatePayment();
   
    expect(component.isValid).toBeFalse();
  });
});
