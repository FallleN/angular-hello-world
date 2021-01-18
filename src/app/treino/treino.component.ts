import { Component, OnInit } from '@angular/core';
import { TreinoService } from './treino.service';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.component.html',
  styleUrls: ['./treino.component.css']
})
export class TreinoComponent implements OnInit {

  cursos: string[];
  nome: string;

  constructor(
    private service: TreinoService
  ) { 
    this.cursos = this.service.getCursos();
    this.nome = 'Maicol';
  }

  ngOnInit(): void {
  }

}
