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
        return /(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01]) (\d{2}):(\d{2})/.test(str);
    }
    static getErroMsg(str:string){
        let msg:string = '';
        if(ValiDate.valiHair(str))
            msg+='Formato invalido';
        else if(DateHelper.stringToDate(str).getTime()<new Date().getTime()){
            msg+='data anterior ao dia de hoje';
        }
        return msg;
    }
}