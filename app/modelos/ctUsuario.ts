// tslint:disable-next-line:class-name
export class ctUsuario {
    constructor (
        public iUsuario: number,
        public cUsuario: string,
        public cPassword: string,
        public cNombre: string,
        public dtFechaN: Date,
        public lActivo: boolean,
        public cObs: string,
    ) {}
}