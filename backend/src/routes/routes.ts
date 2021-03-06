import {Router,Response,Request} from 'express';
import {hairDao} from '../data/hairDao';
import db from '../config/database';
import {MsgDTO} from '../models/packAger'
import {HairCut} from '../models/HairCut';
import {Client} from '../models/Client';
import { DateHelper } from '../helper/dateHelper';
import {ValiDate} from '../models/ValidaDate';
import {validCPF} from '../helper/ValidCpf';
import { Dao } from '../data/Dao';

const routes = Router();


function simpleRoute(req:Request,res:Response,
                    func:(dao:hairDao,{client,hairCut,id}:MsgDTO)=>Promise<unknown>):Promise<unknown>{
    const dao:hairDao = new hairDao(db);
    const id = Number.parseInt(req.params.id);
    const hairCut:HairCut =req.body;
    const client:Client = req.body;
    return func(dao,{client, hairCut, id});
}
function simpleQueryRoute(req:Request,res:Response,
                        func:(dao:hairDao,{client,hairCut,id}:MsgDTO)=>Promise<unknown>):Promise<unknown>{
    return simpleRoute(req,res,func).then(out=>{
        res.json(out);
    })
    .catch(err=>{console.log(err);res.status(500)})
}
function simpleIncludeRoute(req:Request,res:Response,
    func:(dao:hairDao,{client,hairCut,id}:MsgDTO)=>Promise<unknown>,
    valid:()=>boolean=()=>true):Promise<unknown>{
        if(valid())
        return simpleRoute(req,res,func).then(out=>{
            res.redirect('/');
        })
        .catch(err=>{console.log(err);res.status(204).send();})
        return new Promise((res,rej)=>{
            rej("Invalid Value");
        }).catch(err=>{console.log(err);res.status(204).send();})
}

routes.get('/Client',(req,res)=>{
    simpleQueryRoute(req,res,(dao:hairDao,{}:MsgDTO)=>dao.Clients())
})
routes.get('/Client/:id',(req,res)=>{
    simpleQueryRoute(req,res,(dao:hairDao,{id}:MsgDTO)=>dao.ClientById(id))
});
routes.get('/HairCut/:id',(req,res)=>{
    simpleQueryRoute(req,res,(dao:hairDao,{id}:MsgDTO)=>dao.HairCutCliente(id))
});
routes.get('/HairCut',(req,res)=>{
    simpleQueryRoute(req,res,(dao:hairDao,{}:MsgDTO)=>dao.HairCut());
})
routes.get('/HairClient',(req,res)=>{
    simpleQueryRoute(req,res,(dao:hairDao,{}:MsgDTO)=>dao.HairClient())
});
routes.post('/IncludeClient',(req,res)=>{
    //console.log(res.bo)
});
routes.post('/addHairCut',(req,res)=>{
    simpleRoute(req,res,
        ((dao:hairDao,{client}:MsgDTO)=>dao.ClientById(client.id as number)))
        .then((r)=>{
            if((r as Client[]).length==0)throw "Client not found";
            return simpleIncludeRoute(req,res,
                (dao:hairDao,{client,hairCut}:MsgDTO)=>dao.IncludeHairCut(client,hairCut),
                ()=>ValiDate.dateValid(req.body.date as string))
        }).catch(err=>{console.log(err);res.status(204).send();})
    
})
routes.post('/addClient',(req,res)=>{
    simpleIncludeRoute(req,res,
        (dao:hairDao,{client}:MsgDTO)=>dao.includeClient(client),
        ()=>req.body.name!=''&& validCPF(req.body.cpf));
})
routes.delete('/delHairC/:id',(req,res)=>{
    simpleIncludeRoute(req,res,
        (dao:hairDao,{id}:MsgDTO)=>dao.deleteHairCut(id))
})
routes.delete('/delClient/:id',(req,res)=>{
    simpleIncludeRoute(req,res,
        (dao:hairDao,{id}:MsgDTO)=>dao.deleteClient(id));
})
routes.post('/addClient/:id',(req,res)=>{
    simpleIncludeRoute(req,res,
        (dao:hairDao,{id,client}:MsgDTO)=>{
            client.id = id;
            return dao.updateClient(client);
        },()=>req.body.name!=''&& validCPF(req.body.cpf));
})
routes.post('/addHairCut/:id',(req,res)=>{
    simpleRoute(req,res,
        ((dao:hairDao,{hairCut}:MsgDTO)=>dao.ClientById(hairCut.idCliet as number)))
        .then((r)=>{
            if((r as Client[]).length==0)throw "Client not found";
            return simpleIncludeRoute(req,res,
                (dao:hairDao,{id,hairCut}:MsgDTO)=>{
                    hairCut.id = id;
                    return dao.updateHC(hairCut);
                })
        }).catch(err=>{console.log(err);res.status(204).send();})
    
})
routes.get('/clientLike',(req,res)=>{
    simpleQueryRoute(req,res,
        ((dao:hairDao,{}:MsgDTO)=>{
            return dao.Clients();
        }));
})
routes.get('/clientLike/:name',(req,res)=>{
    simpleQueryRoute(req,res,
        ((dao:hairDao,{}:MsgDTO)=>{
            return dao.likeClient(req.params.name)
        }));
})
routes.get('/HCLike',(req,res)=>{
    simpleQueryRoute(req,res,
        ((dao:hairDao,{}:MsgDTO)=>dao.HairClient()))
})
routes.get('/HCLike/:name',(req,res)=>{
    simpleQueryRoute(req,res,
        ((dao:hairDao,{}:MsgDTO)=>dao.likeHC(req.params.name)))
})
 


 
export default routes;