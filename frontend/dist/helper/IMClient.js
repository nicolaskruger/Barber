"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../model/Client");
const Msg_1 = require("../model/Msg");
const InputManipulator_1 = require("./InputManipulator");
class IMCLient extends InputManipulator_1.inputManipulator {
    getErroMsg() {
        let cl = Client_1.Client.contructByValues(Array.from(this.List).map(s => s.value));
        cl.getErrVect().forEach((v, i) => {
            this.viewMsg[i].set(new Msg_1.Msg(v ? '' : this.erroMsg[i]));
        });
        return [];
    }
    getElement() {
        throw new Error("Method not implemented.");
    }
    constructor(str, erro, erroMsg) {
        super(str, erro, erroMsg);
    }
}
exports.IMCLient = IMCLient;
//# sourceMappingURL=IMClient.js.map