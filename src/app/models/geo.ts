export namespace GEO {

	export class PaisParams {
		public PaisIDs: number[];
		constructor(public Nombre: string) { }
		toString() {
			return JSON.stringify(this);
		}
	}

	export class Pais {
	    PaisID: number;
		Nombre: string;
		A2: string;
		A3: string;
		constructor() { }
		toString() {
			return JSON.stringify(this);
		}
	}

}

