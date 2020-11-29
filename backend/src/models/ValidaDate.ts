import {DateHelper} from '../helper/dateHelper';

export class ValiDate{
    static dateValid(str:string){
        if(ValiDate.valiHair(str)){
            let data = DateHelper.stringToDate(str);
            console.log(data.getMinutes());
            return (data.getTime()>new Date().getTime())
        }
        return false;
    }
    private static valiHair(str:string){
        return /(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2})/.test(str);
    }
}