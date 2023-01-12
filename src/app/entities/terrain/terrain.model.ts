import { Club } from "../club/club.model";

export interface ITerrain{
    id? : number;
    size? : string;
    nbrJoueurs? : number;
    prix? : number;
    description? : string;
    picByte? : string;
    club? : Club;
}
export class Terrain implements ITerrain {
  constructor(
    public id?: number,
    public size?: string,
    public nbrJoueurs?: number,
    public prix?: number,
    public description?: string,
    public picByte?: string,
    public club?: Club
  ) {}
}
