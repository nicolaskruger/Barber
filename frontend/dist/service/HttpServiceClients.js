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
    getList() {
        return this.get(this.getFullroute())
            .then(s => {
            let list = [];
            s.forEach(v => {
                list.push(new Client_1.Client(v.name, v.cpf));
            });
            return list;
        })
            .catch(err => console.log(err));
    }
}
exports.HttpServiceClients = HttpServiceClients;
//# sourceMappingURL=HttpServiceClients.js.map