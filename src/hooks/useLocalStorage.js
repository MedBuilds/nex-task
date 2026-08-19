import { useState, useEffect } from "react";
import { getItem, setItem } from "../utils/localStorage";

function useLocalStorage(key, initialValue){
    const [value, setValue] = useState(()=>{
        return getItem(key, initialValue)
    })

    useEffect(()=>{
        setItem(key, value)
    },[key, value])

    return [value, setValue]
}

export default useLocalStorage