# InitiatePayment

Angular -  

1. Login with UI application  username : test ,  password: password123 
2. http://localhost:4200/login   - login function (Login - button)
   http://localhost:4200/payment  - rabo payment validtion (Continue to pay - button)
3. The request-id, certificates, signatures are passed in the header values with hardcoded provided input. 
4. we can edit the data in payment page. Based on the validation success or error message is displayed
   when the continue to pay button is clicked.
5. Unit testing done with karma, jasmine.
6. Codecoverage report is attached in the files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
