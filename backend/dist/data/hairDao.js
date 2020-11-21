"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hairDao = void 0;
var hairDao = /** @class */ (function () {
    function hairDao(db) {
        this.db = db;
    }
    hairDao.prototype.Clients = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.db.all("SELECT * FROM Client;", function (err, resp) {
                if (err)
                    return rej(err);
                res(resp);
            });
        });
    };
    return hairDao;
}());
exports.hairDao = hairDao;
