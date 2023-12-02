import { getData, saveData } from "../context.service"

const url ="http://localhost:3000/State/"

export function saveStateData(data){
    return saveData(url,data)
}

export function getSateData(){
    return getData(url)
}
