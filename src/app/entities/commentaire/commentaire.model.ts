import { Client } from "../client/client.model";
import { Club } from "../club/club.model";
import { Users } from "../users/users.model";

export interface ICommentaire{
    id? : number;
    desc? : string;
    utilisateur? : Users;
    club?: Club ;
    date? :Date ;
}
export class Commentaire implements ICommentaire {
  constructor(public club? : Club ,
    public id? : number, 
    public desc?: string, 
    public client? : Client , 
    public date?: Date) {}
}
