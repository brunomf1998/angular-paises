import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-paginada',
  templateUrl: './tabla-paginada.component.html',
  styleUrls: ['./tabla-paginada.component.css']
})
export class TablaPaginadaComponent {
  @Input() page: number;
  @Input() pageSize: number;
  @Input() paises: any;

  constructor() { }

}
