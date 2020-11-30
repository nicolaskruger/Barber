"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dateHelper_1 = require("../helper/dateHelper");
const Client_1 = require("./Client");
const HairCut_1 = require("./HairCut");
class CHjoin {
    constructor(hair, client) {
        this.hair = hair;
        this.Client = client;
    }
    static maker(s) {
        let hair = new HairCut_1.HairCut(dateHelper_1.DateHelper.stringToDate(s.data), s.id, s.idC);
        let cli = new Client_1.Client(s.name, "", s.idC);
        return new CHjoin(hair, cli);
    }
}
exports.CHjoin = CHjoin;
//# sourceMappingURL=CHjoin.js.map