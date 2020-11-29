import {View} from './View';
import {ListCHJoin} from '../model/ListCHJoin'
import {DateHelper} from '../helper/dateHelper'


export class ViewListaCH extends View{
    protected template(model:ListCHJoin) {
        return `<div class="Main__Tb">Cliente:</div>
                <div class="Main__Tb">Data:</div>
                <div class="Main__Tb"></div>
                <div class="Main__Tb"></div>
                ${model.list.map(s=>`<div class="Main__Tb">${s.Client.name}</div>
                <div class="Main__Tb">     ${DateHelper.dataToString(s.hair.date)}</div>
                <button class="Bt AtlHairCut">Atl</button>
                <button class="Bt DelHairCut">Del</button>`).join('')}
                
        `
    }
    constructor(elemnt:HTMLElement){
        super(elemnt);
    }
}