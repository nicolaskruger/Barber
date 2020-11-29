"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
class ViewListClient extends View_1.View {
    template(models) {
        return `<div class="Main__Tb">Nome</div>
                <div class="Main__Tb">CPF</div>
                <div class="Main__Tb"></div>
                <div class="Main__Tb"></div>
                ${models.list.map(cli => `
                <div class="Main__Tb">${cli.name}</div>
                <div class="Main__Tb">${cli.cpf}</div>
                <button class="Bt AtlClient">Atl</button>
                <button class="Bt DelClient">Del</button>
                `).join('')}`;
    }
    constructor(element) {
        super(element);
    }
}
exports.ViewListClient = ViewListClient;
//# sourceMappingURL=ViewListaClientes.js.map