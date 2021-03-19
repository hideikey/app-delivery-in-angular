import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {

  confirm(message?: string) {
    return new Promise(
      res => (
        res(window.confirm(message || 'Confirmar?'))
      )
    )
  }
}