import { Client } from "../client/client.model";
import { Creneau } from "../creneau/creneau.model";
import { Terrain } from "../terrain/terrain.model";

export interface IReservation {
  id?: number;
  nbrjoueur?: number;
  reservedBy?: Client;
  terrain?: Terrain;
  creneau?: Creneau;
  date? : string;
  etat?: boolean;
}
export class Reservation implements IReservation {
  constructor(
    public id?: number,
    public nbrjoueur?: number,
    public reservedBy?: Client,
    public terrain?: Terrain,
    public creneau?: Creneau,
    public date?: string,
    public etat?: boolean
  ) {}
}
