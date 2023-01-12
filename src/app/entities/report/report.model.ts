import { Client } from "../client/client.model";

export interface IReport{
    id? : number;
    description? : string;
    etat? : boolean;
    client? : Client;
}
export class Report implements IReport {
  constructor(
    public id: number,
    public description: string,
    public etat: boolean,
    public client : Client
  ) {}
}
