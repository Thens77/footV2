import { Admin } from "../admin/admin.model";

export interface IArticle{
    id : number;
    titre? :string;
    data?:string;
    descriptiion? : string;
    admin? : Admin;
}
export type NewArticle = Omit<IArticle, 'id'> & { id: null };

export class Article implements IArticle {
  constructor(
    public id: number,
    public titre: string,
    public data: string,
    public descriptiion: string,
    public admin : Admin
  ) {}
}
