"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CHjoin_1 = require("./CHjoin");
class ListCHJoin {
    constructor() {
        this.list = [];
    }
    replace(lis) {
        this.list = [];
        this.list = lis.map(s => CHjoin_1.CHjoin.maker(s));
    }
}
exports.ListCHJoin = ListCHJoin;
//# sourceMappingURL=ListCHJoin.js.map