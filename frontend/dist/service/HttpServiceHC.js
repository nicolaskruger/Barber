"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpServices_1 = require("./HttpServices");
const dataConverter_1 = require("../helper/dataConverter");
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
    hcLike() {
        return this.route() + "HCLike/";
    }
    delete() {
        return this.route() + "delHairC/";
    }
    getList() {
        return this.get(this.getFullroute())
            .then(s => dataConverter_1.anyToCHJoin(s))
            .catch(err => console.log(err));
    }
    deleteHairCut(i) {
        let path = this.delete() + i.toString();
        return this.del(path)
            .catch(err => console.log(err));
    }
    like(name) {
        return this.get(this.hcLike() + name)
            .then(s => dataConverter_1.anyToCHJoin(s))
            .catch(err => console.log(err));
    }
}
exports.HttpServiceHC = HttpServiceHC;
//# sourceMappingURL=HttpServiceHC.js.map