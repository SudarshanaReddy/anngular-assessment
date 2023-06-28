import { UpdateRecord } from "./update-record";

export class UpdateRecordRequest {
    constructor(
       public updateRecordList :  Array<UpdateRecord>
    ) {}
}