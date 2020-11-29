export function validCPF(str:string){
    return /\d{11}/.test(str);
}