import { Component, OnInit } from '@angular/core';
import { Paises } from 'src/app/models/paises';
import { PaisesService } from 'src/app/services/paises.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [PaisesService]
})
export class MainComponent implements OnInit{

  pais: any = [];
  searchCountry = '';

  constructor(
    private _paisesService: PaisesService,
  ) { }

  ngOnInit(){
    this._paisesService.getPaises().subscribe(
      res =>{
        this.pais = res;
      }
    )
  }


}
