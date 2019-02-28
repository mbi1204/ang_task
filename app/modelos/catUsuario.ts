// tslint:disable-next-line:class-name
export class catUsuario {
    constructor (
        public iUsuario: number,
        public cUsuario: string,
        public cPassword: string,
        public cNombre: string,
        public dtNacimiento: Date,
        public lActivo: boolean,
        public cObc: string,
    ) {}
}
