


export interface IAdmin {
  id? : number;
  prenom? : string;
  nom? : string;
  username? : string;
  password? : string;
  email? : string ;
  number ? : number;
  cin ? : string;
}
export class Admin implements IAdmin {
  constructor(
    public id: number,
    public prenom?: string,
    public nom?: string,
    public username?: string,
    public password?: string,
    public email?: string,
    public number?: number,
    public cin?: string
  ) {}
}
