"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
class Client {
    constructor(name, cpf) {
        this.name = name;
        this.cpf = cpf;
    }
    static ClienteValido(cl) {
        return cpf_cnpj_validator_1.cpf.isValid(cl.cpf) && cl.name != '';
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map