"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dateHelper_1 = require("../helper/dateHelper");
class ValiDate {
    static dateValid(str) {
        console.log("val");
        if (ValiDate.valiHair(str)) {
            let data = dateHelper_1.DateHelper.stringToDate(str);
            console.log(data.getMinutes());
            return (data.getTime() > new Date().getTime());
        }
        return false;
    }
    static valiHair(str) {
        return /(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01]) (\d{2}):(\d{2})/.test(str);
    }
    static getErroMsg(str) {
        let msg = '';
        if (ValiDate.valiHair(str))
            msg += 'Formato invalido';
        else if (dateHelper_1.DateHelper.stringToDate(str).getTime() < new Date().getTime()) {
            msg += 'data anterior ao dia de hoje';
        }
        return msg;
    }
}
exports.ValiDate = ValiDate;
//# sourceMappingURL=ValidaDate.js.map