import axios from "axios";
import { filterByDiet, getAllDiets } from "../dietsSlice";


export const getDiet =()=>async (dispatch)=>{
    try {
        let res = await axios.get()
        dispatch(getAllDiets(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const filterDiet =()=>async (dispatch)=>{
    try {
        dispatch(filterByDiet(payload))
    } catch (error) {
        console.log(error)
    }
}