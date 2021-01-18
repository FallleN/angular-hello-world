import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  constructor() { 

  }

  getCursos() {
    return ['C', 'PHP', 'Node'];
  }

}
