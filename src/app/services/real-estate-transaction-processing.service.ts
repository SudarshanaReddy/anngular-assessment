import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { RealEstateTransactionRecord } from '../models/real-estate-transactio-record';
import { Response } from '../models/respose';
import { environment } from 'src/environments/environnment';
import { UpdateRecordRequest } from '../models/update-record-request';

@Injectable({
  providedIn: 'root'
})
export class RealEstateTransactionProcessingService {

  constructor(private http : HttpClient) { }

  getList() : Observable<any> {
    const options = {
       headers: new HttpHeaders({'content-type' : 'application/json'},
          )
    };

    let uri = environment.baseUrl + environment.getList;

    return this.http.get(uri);
    
  }

  updateList(updateRecordRequest : UpdateRecordRequest) {
    const options = {
       headers: new HttpHeaders({'content-type' : 'application/json'},
          )
    };

    console.log('service update:'+updateRecordRequest.updateRecordList[0].value);

    let uri = environment.baseUrl + environment.updateList;

    return this.http.post(uri, updateRecordRequest);
    
  }
}
