"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {cpf} from 'cpf-cnpj-validator';
const ValidCpf_1 = require("../helper/ValidCpf");
class Client {
    constructor(name, cpf, id) {
        this.name = name;
        this.cpf = cpf;
        this.id = id;
    }
    static contructByValues(val) {
        return new Client(val[0], val[1]);
    }
    getErrVect() {
        return [this.name != '', ValidCpf_1.validCPF(this.cpf)];
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map