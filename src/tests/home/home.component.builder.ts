import { HomeComponent } from '../../app/home/home.component';

export class HomeComponentBuilder {
	private _valor: string;
	private _resultado: string;
	private _router: any;

	constructor() {
		this._router = { navigate: () => { } };
	}

	static builder(): HomeComponentBuilder {
		return new HomeComponentBuilder;
	}

	comValues(valor: any): HomeComponentBuilder {
		this._valor = valor;
		return this;
	}

	comResult(resultado: any): HomeComponentBuilder {
		this._resultado = resultado;
		return this;
	}

	build(): HomeComponent {
		let homeComponent = new HomeComponent(this._router);
		homeComponent.resultado = this._resultado;
		homeComponent.valor = this._valor;

		return homeComponent;
	}
}