"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cutsom_express_1 = __importDefault(require("./config/cutsom-express"));
cutsom_express_1.default.listen(3000, function () {
    console.log("Server start localHost:3000");
});
