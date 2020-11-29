"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
const dateHelper_1 = require("../helper/dateHelper");
class ViewListaCH extends View_1.View {
    template(model) {
        return `<div class="Main__Tb">Cliente:</div>
                <div class="Main__Tb">Data:</div>
                <div class="Main__Tb"></div>
                <div class="Main__Tb"></div>
                ${model.list.map(s => `<div class="Main__Tb">${s.Client.name}</div>
                <div class="Main__Tb">     ${dateHelper_1.DateHelper.dataToString(s.hair.date)}</div>
                <button class="Bt AtlHairCut">Atl</button>
                <button class="Bt DelHairCut">Del</button>`).join('')}
                
        `;
    }
    constructor(elemnt) {
        super(elemnt);
    }
}
exports.ViewListaCH = ViewListaCH;
//# sourceMappingURL=ViewListaCH.js.map