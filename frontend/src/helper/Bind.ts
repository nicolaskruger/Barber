import {ProxyFactory} from '../service/ProxyFactory' 
import {View} from '../view/View';
import { ViewPage } from '../view/ViewPage';


export class Bind {
    
    
    constructor(model, view:View, ...props) {
        
        let proxy = ProxyFactory.create(model, props, model => 
            view.set(model));
            
        view.set(model);
        
        return proxy;
    }
    static create(model, view:View, ...props) {
        
        let proxy = ProxyFactory.create(model, props, model => 
            view.set(model));
            
        view.set(model);
        
        return proxy;
    }
    static createFunc(model,func,...props){
        let proxy = ProxyFactory.create(model,props,func);
        func(model);
        return proxy;
    }
    static createPage(str:string,view:ViewPage,callBack:()=>void=()=>{}){
        return view.includeHtml(str).then(()=>callBack());
        
    }   
}