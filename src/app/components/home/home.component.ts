import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service.ts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons: any[] = [];
  // @ts-ignore
  idElementoEliminar: number;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
      .subscribe((response: any) => {
        this.pokemons = response;
        console.log(this.pokemons);
      })
  }


  onDelete(id:any){

    if (confirm('Desea eliminar el elemento')){
      this.dataService.deletePokemons(id)
        .subscribe((responseDel:any) =>{
          console.log(responseDel);
        })
    }

  }

}
