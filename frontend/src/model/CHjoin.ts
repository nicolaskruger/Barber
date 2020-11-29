import {Client} from './Client';
import {HairCut} from './HairCut';
export class CHjoin{
    hair:HairCut;
    Client:Client;
    constructor(hair:HairCut,client:Client){
        this.hair = hair;
        this.Client = client;
    }
}