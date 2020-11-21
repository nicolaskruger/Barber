import {Router,Response,Request} from 'express';
import {hairDao} from '../data/hairDao';
import db from '../config/database';
import {MsgDTO} from '../models/packAger'
import {HairCut} from '../models/HairCut';
import {Client} from '../models/Client';

const routes = Router();


function simpleRoute(req:Request,res:Response,
                        func:(dao:hairDao,{client,hairCut,id}:MsgDTO)=>Promise<unknown>){
    const dao:hairDao = new hairDao(db);
    const id = Number.parseInt(req.params.id);
    const hairCut:HairCut =new HairCut(new Date());
    const client:Client = new Client("","");
    func(dao,{client, hairCut, id}).then(out=>{
        res.json(out);
    })
    .catch(err=>{console.log(err);res.status(500)})
    
}

routes.get('/Client',(req,res)=>{
    simpleRoute(req,res,(dao:hairDao,{}:MsgDTO)=>dao.Clients())
})
routes.get('/Client/:id',(req,res)=>{
    simpleRoute(req,res,(dao:hairDao,{id}:MsgDTO)=>dao.ClientById(id))
});
routes.get('/HairCut/:id',(req,res)=>{
    simpleRoute(req,res,(dao:hairDao,{id}:MsgDTO)=>dao.HairCutCliente(id))
});
routes.get('/HairCut',(req,res)=>{
    simpleRoute(req,res,(dao:hairDao,{}:MsgDTO)=>dao.HairCut());
})
routes.get('/',(req,res)=>{
    res.send("foi");
});


export default routes;