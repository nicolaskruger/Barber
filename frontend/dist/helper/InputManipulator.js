"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ViewMsg_1 = require("../view/ViewMsg");
class inputManipulator {
    constructor(str, erro, erroMsg) {
        this.viewMsg = [];
        this.trueVet = [false, false];
        this.erroMsg = [];
        this.erroMsg = erroMsg;
        document.querySelectorAll(erro)
            .forEach(err => {
            this.viewMsg.push(new ViewMsg_1.ViewMsg(err));
        });
        this.List = document.querySelectorAll(str);
    }
}
exports.inputManipulator = inputManipulator;
//# sourceMappingURL=InputManipulator.js.map