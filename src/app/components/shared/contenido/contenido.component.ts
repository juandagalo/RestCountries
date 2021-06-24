import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: []
})
export class ContenidoComponent implements OnInit {

  @Input() data:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
