"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliet = void 0;
var cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
var Cliet = /** @class */ (function () {
    function Cliet(name, cpf) {
        this.name = name;
        this.cpf = cpf;
    }
    Cliet.ClienteValido = function (cl) {
        return cpf_cnpj_validator_1.cpf.isValid(cl.cpf) && cl.name != '';
    };
    return Cliet;
}());
exports.Cliet = Cliet;
