"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var hairDao_1 = require("../data/hairDao");
var database_1 = __importDefault(require("../config/database"));
var routes = express_1.Router();
routes.get('/Client', function (req, res) {
    var dao = new hairDao_1.hairDao(database_1.default);
    dao.Clients()
        .then(function (cli) {
        res.json(cli);
    })
        .catch(function (err) { console.log(err); res.status(500).send(); });
});
routes.get('/', function (req, res) {
    res.send("foi");
});
exports.default = routes;
