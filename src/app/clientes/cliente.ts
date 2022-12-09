import { Credit } from "../creditos/credit";

export class Cliente {
    id: number;
    credits: Array<Credit>;
    constructor(id:number, credits: Array<Credit>){
      this.id = id;
      this.credits = credits;
    }
  }
