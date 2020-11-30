"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../model/Client");
const HttpServices_1 = require("./HttpServices");
class HttpServiceClients extends HttpServices_1.HttpService {
    constructor() {
        super();
    }
    getFullroute() {
        return (this.route() + "Client");
    }
    delete() {
        return this.route() + "delClient/";
    }
    like() {
        return this.route() + "clientLike/";
    }
    getList() {
        return this.get(this.getFullroute())
            .then(s => {
            let list = [];
            s.forEach(v => {
                list.push(new Client_1.Client(v.name, v.cpf, v.id));
            });
            return list;
        })
            .catch(err => console.log(err));
    }
    deletClient(i) {
        let path = this.delete() + i.toString();
        return this.del(path)
            .catch(err => console.log(err));
    }
    clientLike(name) {
        return this.get(this.like() + name)
            .catch(err => console.log(err));
    }
}
exports.HttpServiceClients = HttpServiceClients;
//# sourceMappingURL=HttpServiceClients.js.map