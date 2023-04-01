import axios from "axios";
import Card from "../interfaces/card";

const api: string = process.env.REACT_APP_API + "/cardlists" || "";

export function getList(){
    return axios.get(api,{
        headers: {Authorization: JSON.parse(localStorage.getItem("userData") as string).token}})
}

export function addCardtoClist(card: Card){
    return axios.post(api,card,{
        headers: {Authorization: JSON.parse(localStorage.getItem("userData") as string).token}})
}