import { Client } from "../model/Client";
import { View } from "./View";

export class ViewAtlClient extends View{
    protected template(models: Client) {
        return `
        <div class="ImgClose">
            <img src="https://www.flaticon.com/svg/static/icons/svg/61/61155.svg" alt="" class="closeAClient">
        </div>
    <form class="IncClient__Form AtlClient__Form" action="/addClient/${models.id}" method="POST">
        <label class="IncHairCut__Form__cont" for="name">Nome</label>
        <input class="IncHairCut__Form__cont InputClA" name="name" type="datetime" required value="${models.name}">
        <div class="ErroMsgCA"></div>
        <label class="IncHairCut__Form__cont" for="cpf">CPF</label>
        <input class="IncHairCut__Form__cont InputClA" name="cpf" type="number" required value="${models.cpf}">
        <div class="ErroMsgCA"></div>
        <button class="IncHairCut__Form__cont">Enviar</button>
    </form>
        `
    }

}