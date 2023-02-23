export function getItemFromStorage(key){
    return JSON.parse(localStorage.getItem(key))
}

export function setItemIntoStorage(key,data){
    localStorage.setItem(key,JSON.stringify(data))
}

