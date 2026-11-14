import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movimiento } from '../movimiento';

@Component({
  selector: 'app-nuevo-movimiento',
  imports: [FormsModule],
  templateUrl: './nuevo-movimiento.html',
  styleUrl: './nuevo-movimiento.css'
})
export class NuevoMovimientoComponent {
  @Input() saldo: number = 0;
  @Output() movimientoValido = new EventEmitter<Movimiento>();

  tipo: string = 'Recarga';
  monto: number | null = null;

  esGastoInvalido(): boolean {
    return this.tipo === 'Gasto' && this.monto !== null && this.monto > this.saldo;
  }

  formularioValido(): boolean {
    return this.monto !== null && this.monto > 0 && !this.esGastoInvalido();
  }

  registrar(): void {
    if (this.formularioValido() && this.monto !== null) {
      this.movimientoValido.emit({
        tipo: this.tipo,
        monto: this.monto
      });
      this.monto = null;
    }
  }
}
