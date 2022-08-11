import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from "rxjs";
import { Paises } from "../models/paises";

@Injectable() 
export class PaisesService{

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = 'https://restcountries.com/v3.1/all';
    }

    getPaises():Observable<any>{
        return this._http.get(this.url);
    }

}
