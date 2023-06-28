import { RealEstateTransactionRecord } from "./real-estate-transactio-record";

export class Response {
    constructor ( 
        public data : RealEstateTransactionRecord[] = []
    ) {} 
}