"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpServices_1 = require("./HttpServices");
const CHjoin_1 = require("../model/CHjoin");
const HairCut_1 = require("../model/HairCut");
const dateHelper_1 = require("../helper/dateHelper");
const Client_1 = require("../model/Client");
class HttpServiceHC extends HttpServices_1.HttpService {
    constructor() {
        super();
    }
    getFullroute() {
        return (this.route() + "HairClient");
    }
    Client() {
        return this.route() + "Client";
    }
    getList() {
        return this.get(this.getFullroute())
            .then(s => {
            let list = [];
            s.forEach(v => {
                list.push(new CHjoin_1.CHjoin(new HairCut_1.HairCut(dateHelper_1.DateHelper.stringToDate(v.data)), new Client_1.Client(v.name, "")));
            });
            return list;
        })
            .catch(err => console.log(err));
    }
}
exports.HttpServiceHC = HttpServiceHC;
//# sourceMappingURL=HttpServiceHC.js.map