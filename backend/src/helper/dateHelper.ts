function Z(n:number){
    return n<10?`0${n}`:`${n}`;
}
export class DateHelper{
    
    static dataToString(date:Date):string{
        return `${Z(date.getUTCDate())}/${Z(date.getMonth())}/${Z(date.getFullYear())} ${Z(date.getHours())}:${Z(date.getMinutes())}`;
    }
    static stringToDate(str:string):Date{
        let test = /(\d{1,4})\/(\d{1,2})\/(\d{1,2}) (\d{1,2}):(\d{1,2})/;
        if(test.test(str)){
            let val = str.match(test) as RegExpExecArray;
            let int = val.map(v=>Number.parseInt(v));
            return new Date(int[1],int[2]-1,int[3],int[4],int[5]);

        }
        return new Date();
    }
    

}