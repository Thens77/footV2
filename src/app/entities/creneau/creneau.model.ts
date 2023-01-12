import { Club } from "../club/club.model";

export interface ICreneau {
  id?: number;
  heureDebut?: string;
  heureFin?: string;
  club? : Club 
}
export class Creneau implements ICreneau {
  constructor(
    public id?: number,
    public heureDebut?: string,
    public heureFin?: string,
    public club? : Club  
  ) {}
}
