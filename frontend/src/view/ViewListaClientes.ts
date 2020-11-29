import { ClientList } from "../model/ClientList";
import { View } from "./View";

export class ViewListClient extends View{
    protected template(models: ClientList) {
        return `<div class="Main__Tb">Nome</div>
                <div class="Main__Tb">CPF</div>
                <div class="Main__Tb"></div>
                <div class="Main__Tb"></div>
                ${models.list.map(cli=>`
                <div class="Main__Tb">${cli.name}</div>
                <div class="Main__Tb">${cli.cpf}</div>
                <button class="Bt AtlClient">Atl</button>
                <button class="Bt DelClient">Del</button>
                `).join('')}`;
    }
    constructor(element:HTMLElement){
        super(element);
    }

}