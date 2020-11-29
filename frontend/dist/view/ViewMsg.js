"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
class ViewMsg extends View_1.View {
    template(models) {
        return `${models.getMsg()}`;
    }
    constructor(element) {
        super(element);
    }
}
exports.ViewMsg = ViewMsg;
//# sourceMappingURL=ViewMsg.js.map