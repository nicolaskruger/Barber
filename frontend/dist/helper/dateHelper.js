"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Z(n) {
    return n < 10 ? `0${n}` : `${n}`;
}
class DateHelper {
    static dataToString(date) {
        return `${Z(date.getUTCDate())}/${Z(date.getMonth())}/${Z(date.getFullYear())} ${Z(date.getHours())}:${Z(date.getMinutes())}`;
    }
    static stringToDate(str) {
        let test = /(\d{1,4})\/(\d{1,2})\/(\d{1,2}) (\d{1,2}):(\d{1,2})/;
        if (test.test(str)) {
            let val = str.match(test);
            let int = val.map(v => Number.parseInt(v));
            return new Date(int[1], int[2], int[3], int[4], int[5]);
        }
        return new Date();
    }
}
exports.DateHelper = DateHelper;
//# sourceMappingURL=dateHelper.js.map