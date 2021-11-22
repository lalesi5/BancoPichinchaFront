import {Component, OnInit, Output} from '@angular/core';
import {DataService} from "../../services/data.service.ts.service";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {

  }

}
