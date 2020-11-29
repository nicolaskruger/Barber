"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListCHJoin_1 = require("../model/ListCHJoin");
const ViewListaCH_1 = require("../view/ViewListaCH");
const Controller_1 = require("./Controller");
const Bind_1 = require("../helper/Bind");
const HttpServiceHC_1 = require("../service/HttpServiceHC");
const ViewDef_1 = require("../view/ViewDef");
const PageList_1 = require("../view/PageList");
const IMHairCut_1 = require("../helper/IMHairCut");
const IMClient_1 = require("../helper/IMClient");
const ViewListaClientes_1 = require("../view/ViewListaClientes");
const ClientList_1 = require("../model/ClientList");
const HttpServiceClients_1 = require("../service/HttpServiceClients");
const ViewTxtContent_1 = require("../view/ViewTxtContent");
class BarberController extends Controller_1.Controller {
    constructor() {
        super();
        this.currT = 0;
        this.toogleFunc = [
            () => {
                this.toogleHaircut.setInvisibity(true);
                this.toogleClient.setInvisibity(false);
                this.toogelButton.set("Cortes");
            },
            () => {
                this.toogleHaircut.setInvisibity(false);
                this.toogleClient.setInvisibity(true);
                this.toogelButton.set("Clientes");
            }
        ];
    }
    Init() {
        this.pageList = new PageList_1.PageList(['.Main', '.IncHairCut', '.IncClient', '.Client'], ['hc.html', 'IncludeHairCut.html', 'IncludeClient.html', 'ClientList.html']);
        return this.pageList.getPromise()
            .then(() => {
            this.init();
        });
    }
    init() {
        this.viewListaCH = new ViewListaCH_1.ViewListaCH(this.$(".Main__table"));
        this.viewListClient = new ViewListaClientes_1.ViewListClient(this.$(".ClienteList__table"));
        this.viewHaircut = new ViewDef_1.ViewDef(this.$(".IncHairCut"));
        this.viewClient = new ViewDef_1.ViewDef(this.$(".IncClient"));
        this.imHaircut = new IMHairCut_1.IMHairCut(".InputHair", ".ErroMsg", ["Erro no formato da data", "cliente inextente"]);
        this.imClient = new IMClient_1.IMCLient(".InputCl", ".ErroMsgC", ["Nome Invalido", "Cpf Invalido"]);
        this.toogelButton = new ViewTxtContent_1.ViewTxContent(this.$(".toogle"));
        this.toogleClient = new ViewDef_1.ViewDef(this.$(".Client"));
        this.toogleHaircut = new ViewDef_1.ViewDef(this.$(".Main"));
        this.list = Bind_1.Bind.createFunc(new ListCHJoin_1.ListCHJoin(), (model) => {
            new HttpServiceHC_1.HttpServiceHC().getList()
                .then(s => {
                this.list.list = s;
                this.viewListaCH.set(model);
            });
        }, "atl");
        this.Clients = Bind_1.Bind.createFunc(new ClientList_1.ClientList(), (model) => {
            new HttpServiceClients_1.HttpServiceClients().getList()
                .then(s => {
                this.Clients.list = s;
                this.viewListClient.set(this.Clients);
            });
        });
    }
    openAddClient() {
        this.viewClient.setInvisibity(false);
    }
    closeAddClient() {
        this.viewClient.setInvisibity(true);
    }
    openAddCut() {
        this.viewHaircut.setInvisibity(false);
    }
    closeAddCut() {
        this.viewHaircut.setInvisibity(true);
    }
    sendCliet() {
        this.imClient.getErroMsg();
    }
    sendHairCut() {
        this.imHaircut.getErroMsg();
    }
    toogleScreen() {
        this.toogleFunc[this.currT]();
        this.currT = (this.currT + 1) % this.toogleFunc.length;
    }
}
exports.BarberController = BarberController;
//# sourceMappingURL=BarberController.js.map