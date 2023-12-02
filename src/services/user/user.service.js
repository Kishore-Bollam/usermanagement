import { getData, saveData } from "../context.service"

const url ="http://localhost:3000/user/"

export function saveUserData(data){
    return saveData(url,data)
}

export function getUserData(){
    return getData(url)
}

