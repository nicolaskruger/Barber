function Z(n:number){
    return n<10?`0${n}`:`${n}`;
}
export class DateHelper{
    
    static dataToString(date:Date):string{
        return `${Z(date.getFullYear())}/${Z(date.getMonth())}/${Z(date.getUTCDate())} ${Z(date.getHours())}:${Z(date.getMinutes())}`;
    }
    static stringToDate(str:string):Date{
        let test = /(\d{1,4})\/(\d{1,2})\/(\d{1,2}) (\d{1,2}):(\d{1,2})/;
        if(test.test(str)){
            let val = str.match(test);
            let int = val.map(v=>Number.parseInt(v));
            return new Date(int[1],int[2],int[3],int[4],int[5]);

        }
        return new Date();
    }

}