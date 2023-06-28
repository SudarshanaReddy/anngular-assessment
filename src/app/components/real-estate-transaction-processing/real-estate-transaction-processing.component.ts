import { Component, OnInit } from '@angular/core';
import { RealEstateTransactionRecord } from 'src/app/models/real-estate-transactio-record';
import { RealEstateTransactionProcessingService } from 'src/app/services/real-estate-transaction-processing.service';
import { Record } from 'src/app/models/record';
import { UpdateRecord } from 'src/app/models/update-record';
import { UpdateRecordRequest } from 'src/app/models/update-record-request';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-real-estate-transaction-processing',
  templateUrl: './real-estate-transaction-processing.component.html',
  styleUrls: ['./real-estate-transaction-processing.component.css']
})
export class RealEstateTransactionProcessingComponent implements OnInit {

  public realEstateTrannsactionRecords : Array<RealEstateTransactionRecord> = new Array();
  public finalTransactionRecords: Array<Record> = new Array();
  public updateRecord : Array<UpdateRecord> = new Array();

  constructor(private service : RealEstateTransactionProcessingService) {
    console.log('inside component');
  }

  ngOnInit() {
    console.log('inside ngOnInit');
    this.service.getList().subscribe(result => {
      if(result!=undefined) {
        this.realEstateTrannsactionRecords = result.data;
        this.constructRecords(this.realEstateTrannsactionRecords);
      }
    })
  }

  constructRecords(realEstateTrannsactionRecords : Array<RealEstateTransactionRecord>) : void {
    let index = 0;
    realEstateTrannsactionRecords.forEach(element => {
      this.finalTransactionRecords.push(new Record(index, element));
      index++;
    });
  }

  captureChange(rowId : number, columnId: number, value : string) {
    console.log(value);
    this.updateRecord.push(new UpdateRecord(rowId, columnId, value));
  }

  update() {
    console.log('update record size:'+this.updateRecord.length);
    
    this.service.updateList(new UpdateRecordRequest(this.updateRecord)).subscribe();
  }

}
