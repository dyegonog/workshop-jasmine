import { HomeComponent } from '../../app/home/home.component';
import { HomeComponentBuilder } from './home.component.builder';

describe('HomeComponent', () => {
	it('string vazia', () => {
		let homeComponent = HomeComponentBuilder.builder().comValues('').build();

		homeComponent.verificar();

		expect(homeComponent.resultado).toEqual('Insira um valor');
	});

	it('valor zero', () => {
		let homeComponent = HomeComponentBuilder.builder().comValues('0').build();

		homeComponent.verificar();

		expect(homeComponent.resultado).toEqual('Este valor não é impar nem par');
	});

	it('com valor par', () => {
		let homeComponent = HomeComponentBuilder.builder().comValues('2').build();

		homeComponent.verificar();

		expect(homeComponent.resultado).toEqual('valor par');
	});

	it('com valor impar', () => {
		let homeComponent = HomeComponentBuilder.builder().comValues('3').build();

		homeComponent.verificar();

		expect(homeComponent.resultado).toEqual('valor impar');
	});
});