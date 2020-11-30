"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
const dateHelper_1 = require("../helper/dateHelper");
class ViewAtlHairCut extends View_1.View {
    template(models) {
        return `
        <div class="ImgClose">
            <img src="https://www.flaticon.com/svg/static/icons/svg/61/61155.svg" alt="" class="closeAHairCut">
        </div>
        <form class="IncAHairCut__Form" action="/addHairCut/${models.hair.id}" method="POST">
            <label class="IncHairCut__Form__cont" for="Date">Data yyyy/MM/dd hh:mm</label>
            <input class="IncHairCut__Form__cont InputHairHCA" name="date" type="datetime" required value="${dateHelper_1.DateHelper.dataToString(models.hair.date)}">
            <div class="ErroMsgAC"></div>
            <label class="IncHairCut__Form__cont" for="IdCliete">Id Cliente</label>
            <input class="IncHairCut__Form__cont InputHairHCA" name="idCliet" type="number" required value="${models.Client.id}">
            <div class="ErroMsgAC"></div>
            <button class="IncHairCut__Form__cont">Enviar</button>
        </form>
        `;
    }
}
exports.ViewAtlHairCut = ViewAtlHairCut;
//# sourceMappingURL=ViewAtlHairCut.js.map