import { Client } from "./Client";

export class ClientList{
    list:Client[] = [];
    constructor(clients:Client[]=[]){
        this.list=clients;
    }
}