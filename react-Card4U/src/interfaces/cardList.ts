import Card from "./card";

export default interface CardList{
    _id?: string,
    quantity?: number,
    userId: number,
    cards: Card[]
}