import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	valor: string;
	resultado: string;

	constructor(private _router: Router) { }

	verificar(): void {
		if (!this.valor) {
			this.resultado = 'Insira um valor';
			return;
		}

		if (this.valor === '0') {
			this.resultado = 'Este valor não é impar nem par';
			return;
		}

		if (Number.parseInt(this.valor) % 2 === 0) {
			this.resultado = 'valor par';
			return;
		}

		this.resultado = 'valor impar';
	}

	navegar(): void {
		this._router.navigate(['./about']);
	}
}