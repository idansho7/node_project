/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import User from "../interfaces/user";
import jwt_decode from "jwt-decode";


const api: string = process.env.REACT_APP_API || "";

export function checkUser(userToCheck: User){
    return axios.post(`${api}/login`, userToCheck);
}

export function AddUser(userToAdd: User){
    return axios.post(`${api}/register`,userToAdd);
}

export function getIsBusiness(){
    let token = JSON.parse(localStorage.getItem("userData") as string).token;
    return(jwt_decode(token) as any).isBusiness;
}

