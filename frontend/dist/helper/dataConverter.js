"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CHjoin_1 = require("../model/CHjoin");
const Client_1 = require("../model/Client");
const HairCut_1 = require("../model/HairCut");
const dateHelper_1 = require("./dateHelper");
function anyToCHJoin(s) {
    let list = [];
    s.forEach(v => {
        list.push(new CHjoin_1.CHjoin(new HairCut_1.HairCut(dateHelper_1.DateHelper.stringToDate(v.data), v.id, v.idC), new Client_1.Client(v.name, "", Number.parseInt(v.idC))));
    });
    return list;
}
exports.anyToCHJoin = anyToCHJoin;
//# sourceMappingURL=dataConverter.js.map