import { getData, saveData } from "../context.service"

const url ="http://localhost:3000/country/"

export function saveCountryData(data){
    return saveData(url,data)
}

export function getCountryData(){
    return getData(url)
}

