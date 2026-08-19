export function setItem(key, value){
    try {
        window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log(error)
    }
}

export function getItem(key, initialValue){
    try {
        const item = window.localStorage.getItem(key) 
        return item? JSON.parse(item): initialValue
    } catch (error) {
        console.log(error)
        return initialValue
    }
}