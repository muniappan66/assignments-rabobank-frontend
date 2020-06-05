import { Component, OnInit } from "@angular/core";
import { RestapiService } from "../restapi.service";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent implements OnInit {
  constructor(private service: RestapiService) {}

  paymentDetails: any;
  message: any;
  amount: string;
  currency: string;
  creditorIBAN: string;
  debtorIBAN: string;
  validated: any;
  paymentResult: String;
  paymentId: string;
  reason: string;
  isValid: boolean = true;
  public successMsg = "success";
  public failureMsg = "failure";
  ngOnInit() {
    this.amount = "190.00";
    this.currency = "EUR";
    this.debtorIBAN = "02RABO713438455192";
    this.creditorIBAN = "NL94ABNA1008270121";
  }

  initiatePayment() {
    // this.amount =  form.value.amount;
    // this.currency =  form.value.currency;
    // this.debtorIBAN =  form.value.dccardnumber;
    // this.creditorIBAN = form.value.cccardnumber;
      
    this.paymentDetails = {
      amount: this.amount,
      currency: this.currency,
      debtorIBAN: this.debtorIBAN,
      creditorIBAN: this.creditorIBAN,
    };
    let resp = this.service.validatePayment(this.paymentDetails);
    resp.subscribe(
      (data) => {
        this.validated = data;
        if (this.validated.status == "Accepted") {
          this.paymentId = this.validated.paymentId;
          this.isValid = false;
          this.paymentResult = "success";
        } else {
          this.paymentResult = "failure";
          this.isValid = true;
          this.reason = this.validated.reasonCode;
        }
      },
      (error) => {
        this.paymentResult = "failure";
          this.isValid = true;
          this.reason = error.message;
      }
    );
  }
}
