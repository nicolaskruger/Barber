import {BarberController} from './controller/BarberController';

let controller = new BarberController();
controller.Init()
    .then(()=>{
        document.querySelector('.addC').addEventListener('click',controller.openAddClient.bind(controller));
        document.querySelector('.addH').addEventListener('click',controller.openAddCut.bind(controller));
        document.querySelector('.IncHairCut__Form').addEventListener('submit',controller.sendHairCut.bind(controller));
        document.querySelector('.IncClient__Form').addEventListener('submit',controller.sendCliet.bind(controller));
        document.querySelector('.closeHairCut').addEventListener('click',controller.closeAddCut.bind(controller));
        document.querySelector('.closeClient').addEventListener('click',controller.closeAddClient.bind(controller));
        document.querySelector('.toogle').addEventListener('click',controller.toogleScreen.bind(controller));
        document.querySelector('.filter__input').addEventListener('input',controller.search.bind(controller));
    })