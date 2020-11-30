import {CHjoin} from '../model/CHjoin';
import {ListCHJoin} from '../model/ListCHJoin';
import {ViewListaCH} from '../view/ViewListaCH';
import {Controller} from './Controller';
import {ProxyFactory} from '../service/ProxyFactory';
import {Bind} from '../helper/Bind';
import {HttpService} from '../service/HttpServices';
import {HttpServiceHC} from '../service/HttpServiceHC';
import {ViewDef} from '../view/ViewDef'
import {ViewPage} from '../view/ViewPage'
import {PageList} from '../view/PageList';
import {IMHairCut} from '../helper/IMHairCut';
import {IMCLient} from '../helper/IMClient';
import { ViewListClient } from '../view/ViewListaClientes';
import { ClientList } from '../model/ClientList';
import { Client } from '../model/Client';
import { HttpServiceClients } from '../service/HttpServiceClients';
import { ViewTxContent } from '../view/ViewTxtContent';
import { ViewAtlClient } from '../view/ViewAtlClient';
import {ViewAtlHairCut} from '../view/ViewAtlHairCut';
import { View } from '../view/View';

export class BarberController extends Controller{
    hcPage:ViewPage;
    pageList:PageList;
    viewListaCH:ViewListaCH;
    viewListClient:ViewListClient;
    viewHaircut:ViewDef;
    viewClient:ViewDef;
    viewAClient:ViewAtlClient;
    viewAtlHC:ViewAtlHairCut;
    list:ListCHJoin;
    Clients:ClientList;
    imHaircut:IMHairCut;
    imClient:IMCLient;
    currT = 0;
    toogleHaircut:ViewDef;
    toogleClient:ViewDef;
    toogelButton:ViewTxContent;
    toogleFunc = [
        ()=>{
            this.toogleHaircut.setInvisibity(true);
            this.toogleClient.setInvisibity(false);
            this.toogelButton.set("Cortes");
        },
        ()=>{
            this.toogleHaircut.setInvisibity(false);
            this.toogleClient.setInvisibity(true);
            this.toogelButton.set("Clientes");
        }
    ]
    constructor(){
        super();
        
    }
    Init(){
        this.pageList = new PageList(['.Main','.IncHairCut','.IncClient','.Client'],['hc.html','IncludeHairCut.html','IncludeClient.html','ClientList.html'])
        return this.pageList.getPromise()
                .then(()=>{
                    this.init();
                })
    }
    private init(){
        this.viewListaCH = new ViewListaCH(this.$(".Main__table"));
        this.viewListClient = new ViewListClient(this.$(".ClienteList__table"))
        this.viewHaircut = new ViewDef(this.$(".IncHairCut"));
        this.viewClient = new ViewDef(this.$(".IncClient"));
        this.viewAClient = new ViewAtlClient(this.$(".UpClient"));
        this.viewAtlHC = new ViewAtlHairCut(this.$(".UpHC"));
        this.imHaircut = new IMHairCut(".InputHair",".ErroMsg",["Erro no formato da data","cliente inextente"]);
        this.imClient = new IMCLient(".InputCl",".ErroMsgC",["Nome Invalido","Cpf Invalido"])
        this.toogelButton = new ViewTxContent(this.$(".toogle"));
        this.toogleClient = new ViewDef(this.$(".Client"))
        this.toogleHaircut = new ViewDef(this.$(".Main"));
        this.list = Bind.createFunc(new ListCHJoin(),(model:ListCHJoin)=>{
        
            new HttpServiceHC().getList()
                        .then(s =>{
                            this.list.list =s as CHjoin[];
                            this.viewListaCH.set(model);
                            document.querySelectorAll('.DelHairCut')
                                    .forEach((e,i)=>{
                                        e.addEventListener("click",this.delHairCut.bind(this,i));
                                    })
                            document.querySelectorAll(".AtlHairCut")
                                    .forEach((e,i)=>{
                                        e.addEventListener("click",this.AtlHC.bind(this,i))
                                    })
                            
                        })
                        
            
        },"atl");
        this.Clients = Bind.createFunc(new ClientList(),(model:ClientList)=>{
            new HttpServiceClients().getList()
                .then(s=>{
                    this.Clients.list =s as Client[];
                    this.viewListClient.set(this.Clients);
                    document.querySelectorAll('.DelClient')
                            .forEach((e,i)=>{
                                e.addEventListener("click",this.delClient.bind(this,i));
                            })
                    document.querySelectorAll('.AtlClient')
                            .forEach((e,i)=>{
                                e.addEventListener('click',this.AtlClient.bind(this,i))
                            })
                })
               
        })
    }
    delHairCut(i:number){
        new HttpServiceHC().deleteHairCut(this.list.list[i].hair.id)
    }
    delClient(i:number){
        new HttpServiceClients().deletClient(this.Clients.list[i].id);
    }
    Atl(i:number,thisView:View,list:any[],clString:string,subString:string,close:()=>void,submit:(val?:Event)=>void){
        thisView.setInvisibity(false);
        thisView.set(list[i]);
        document.querySelector(clString).addEventListener("click",close.bind(this));
        document.querySelector(subString).addEventListener("submit",submit.bind(this));
    }
    AtlClient(i:number){
        this.Atl(i,this.viewAClient,this.Clients.list,".closeAClient",".AtlClient__Form",this.closeAtlClient,this.sendAtlClient);
    }
    AtlHC(i:number){
        this.Atl(i,this.viewAtlHC,this.list.list,".closeAHairCut",".IncAHairCut__Form",this.closeAtlHairCut,this.sendAtlHC);
    }
    openAddClient(){
        this.viewClient.setInvisibity(false);
    }
    closeAddClient(){
        this.viewClient.setInvisibity(true);
    }
    closeAtlClient(){
        this.viewAClient.setInvisibity(true);
    }
    closeAtlHairCut(){
        this.viewAtlHC.setInvisibity(true);
    }
    openAddCut(){
        this.viewHaircut.setInvisibity(false); 
    }
    closeAddCut(){
        this.viewHaircut.setInvisibity(true);
    }
    sendCliet(){
        this.imClient.getErroMsg();
    }
    sendHairCut(){
        this.imHaircut.getErroMsg();    
    }
    sendAtlClient(){
        new IMCLient(".InputClA",".ErroMsgCA",["Nome Invalido","Cpf Invalido"])
                        .getErroMsg();
    }
    sendAtlHC(event:Event){
        new IMHairCut(".InputHairHCA",".ErroMsgAC",["DataInvalida","id inexistente"])
                        .getErroMsg();
    }
    toogleScreen(){
        this.toogleFunc[this.currT]();
        this.currT= (this.currT+1)%this.toogleFunc.length;
    }
}