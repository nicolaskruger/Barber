"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InputManipulator_1 = require("./InputManipulator");
const ValidaDate_1 = require("../model/ValidaDate");
const Msg_1 = require("../model/Msg");
const HttpServices_1 = require("../service/HttpServices");
class IMHairCut extends InputManipulator_1.inputManipulator {
    getErroMsg() {
        let val = Array.from(this.List).map(s => s.value);
        let service = new HttpServices_1.HttpService();
        service.get(service.route() + `Client/${val[1]}`)
            .then(s => {
            this.trueVet[0] = ValidaDate_1.ValiDate.dateValid(val[0]);
            this.trueVet[1] = Array.from(s).length > 0;
            this.trueVet.forEach((val, i) => {
                this.viewMsg[i].set(new Msg_1.Msg(val ? '' : this.erroMsg[i]));
            });
        });
        return [];
    }
    getElement() {
        throw new Error('Method not implemented.');
    }
    constructor(str, erro, erroMsg) {
        super(str, erro, erroMsg);
    }
}
exports.IMHairCut = IMHairCut;
//# sourceMappingURL=IMHairCut.js.map