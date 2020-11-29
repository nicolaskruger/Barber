import {View} from './View';

export class ViewDef extends View{
    protected template(models: any) {
        throw new Error('Method not implemented.');
    }
    constructor(element:HTMLElement){
        super(element);
    }
}