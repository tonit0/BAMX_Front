export interface Revicion {

    id_revision:    number;
	fecha:  string;
	hora: string;
	conductor: number;	
	id_empleado: number;
	destino: string;
	nivel_combustible: number;
	kilometraje_inicial: number;
	nivel_aceite_moto: number;
	nivel_aceite_transmision: number;
	nivel_aceite_power: number;	
	nivel_agua: number;	
	nivel_liquido_frenos: number;	
	revision_fugas_fluidos: number;
	revision_luces: number;
	carroceria: number
	placas: number;
	estado_llantas: number;
	tarjeta_circulacion_vigente: number;
	tarjeton_casetas_cobro: number;
	poliza_seguro_vigente: number;
	llanta_extra: number;
	revision_cruceta: number;
	revision_gato_hidraulico: number;
	tapon_gasolina: number;
	observaciones: string;
}
  