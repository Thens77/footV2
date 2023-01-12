export interface IProprietaire {
  id?: number;
  prenom?: string;
  nom?: string;
  username?: string;
  password?: string;
  email?: string;
  number?: number;
  cin?: string;
  isActive?: boolean;
}
export class Proprietaire implements IProprietaire {
  constructor(
    public id?: number,
    public prenom? : string,
    public nom? : string,
    public username? : string,
    public password? : string,
    public email? : string,
    public number? : number,
    public cin? : string,
    public isActive? : boolean
  ) {}
}
