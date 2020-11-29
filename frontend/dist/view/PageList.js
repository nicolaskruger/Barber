"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ViewPage_1 = require("./ViewPage");
const Bind_1 = require("../helper/Bind");
class PageList {
    constructor(id, pages) {
        this.list = [];
        id.forEach((Id, i) => {
            this.list.push(Bind_1.Bind.createPage(pages[i], new ViewPage_1.ViewPage(document.querySelector(Id))));
        });
    }
    getPromise() {
        return Promise.all(this.list);
    }
}
exports.PageList = PageList;
//# sourceMappingURL=PageList.js.map