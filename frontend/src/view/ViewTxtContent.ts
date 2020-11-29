import { View } from "./View"

export class ViewTxContent extends View{
    protected template(models: string) {
        return models;
    }
    
    constructor(element:HTMLElement){
        super(element);
    }
}