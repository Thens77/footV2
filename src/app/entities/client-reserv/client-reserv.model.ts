import { Panier } from "../panier/panier.model";
import { Reservation } from "../reservation/reservation.model";

export interface IClientReserv {
  id? : number;
  reservation? : Reservation;
  panier? : Panier;
  nbr? : number;
}

export class ClientReserv implements IClientReserv {
  constructor(
    public id: number,
    public reservation: Reservation,
    public panier: Panier,
    public nbr: number
  ) {}
}
