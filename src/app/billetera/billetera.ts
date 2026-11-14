import { Component } from '@angular/core';
import { Movimiento } from '../movimiento';
import { NuevoMovimientoComponent } from '../nuevo-movimiento/nuevo-movimiento';

@Component({
  selector: 'app-billetera',
  imports: [NuevoMovimientoComponent],
  templateUrl: './billetera.html',
  styleUrl: './billetera.css'
})
export class BilleteraComponent {
  saldo: number = 250;
  movimientos: Movimiento[] = [];

  procesarMovimiento(movimiento: Movimiento): void {
    if (movimiento.tipo === 'Recarga') {
      this.saldo = this.saldo + movimiento.monto;
    } else if (movimiento.tipo === 'Gasto') {
      this.saldo = this.saldo - movimiento.monto;
    }
    this.movimientos.unshift(movimiento);
  }
}
