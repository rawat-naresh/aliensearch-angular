import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class ApiService {
    constructor(
        private http:HttpClient
    ){}

    private formatErrors(error:any) {
        return throwError(error.error);
    }

    get(path:string,queryString):Observable<any>{
        return this.http.get(`${environment.api_url}${path}`,{params:queryString})
            .pipe(catchError(this.formatErrors));
    }
}