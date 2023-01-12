import { Client } from "../client/client.model";

export interface IPanier{
    id? : number;
    client? : Client ;
}

export class Panier implements IPanier {
  constructor(public id?: number, public client?: Client) {}
}
