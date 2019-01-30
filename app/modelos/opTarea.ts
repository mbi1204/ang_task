// tslint:disable-next-line:class-name
export class opTarea {
    constructor (
        public iTarea: number,
        public iCliente: number,
        public cResponsable: string,
        public cDescripcion: string,
        public cNota: string,
        public dtCreacion: Date,
        public dtModificacion: Date,
        public dtTerminado: Date,
        public iEstatus: number,
        public iUsuario: number,
        public iTipo: number,
    ) {}
}