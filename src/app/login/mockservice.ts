import { Observable, throwError } from 'rxjs';
import "rxjs/add/observable/of";
import { stringify } from 'querystring';
export class mockservice {

public test(username,password): Observable<any> {
   let strf:string;
    if(password=='password123'){
        return Observable.of('Welcome');
    }
    return Observable.of('failure');
  }

}