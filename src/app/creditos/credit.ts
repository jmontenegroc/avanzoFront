import { Cliente } from "../clientes/cliente";

export class Credit {
    id: number;
    creditAmount: number;
    state: string;
    creditDate: string;

    constructor(id: number, creditAmount: number, state: string, creditDate: string) {
        this.id = id;
        this.creditAmount = creditAmount;
        this.state = state;
        this.creditDate = creditDate;
    }
}
