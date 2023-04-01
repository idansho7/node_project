import axios from "axios";
import Card from "../interfaces/card";

const api: string = process.env.REACT_APP_API + "/cards"

export function getCards(){
    return axios.get(api,{
        headers: {Authorization: JSON.parse(localStorage.getItem("userData") as string).token}})
}

export function deleteCard(cardId: string){
    return axios.delete(`${api}/${cardId}`,{
        headers: {Authorization: JSON.parse(localStorage.getItem("userData") as string).token}})
}

export function updateCard(newCard: Card){
    return axios.put(`${api}/${newCard._id}`,newCard,{
        headers: {Authorization: JSON.parse(localStorage.getItem("userData") as string).token}})
}