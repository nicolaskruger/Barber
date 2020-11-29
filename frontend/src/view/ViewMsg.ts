import  {View} from './View';
import {Msg} from '../model/Msg'

export class ViewMsg extends View{
    protected template(models: Msg) {
        return `${models.getMsg()}`
    }
    constructor(element:HTMLElement){
        super(element);
    }

}