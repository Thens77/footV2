
export interface IRegisterP {
  username?: string, 
  email?:string ,
  nom ? : string ,
  prenom? : string ,
  age? : number,
 cin? : string ,
  password?: string
  picByte?  : string ;
 

}
export class RegisterP implements IRegisterP {
 constructor(
  public username?: string,
  public email?:string ,
  public nom ? : string ,
  public prenom? : string ,
  public age? : number,
  public cin? : string ,
  public password?: string,
  public picByte?  : string ,
  
    
 ) {}
}


export interface IRegisterC {
  username?: string, 
  email?:string ,
  nom ? : string ,
  prenom? : string ,
  age? : number,
 cin? : string ,
  password?: string
  picByte?  : string ;
 

}
export class RegisterC implements IRegisterC {
 constructor(
  public username?: string,
  public email?:string ,
  public nom ? : string ,
  public prenom? : string ,
  public password?: string,    
 ) {}
}