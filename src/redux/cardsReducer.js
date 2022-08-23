import shortid from "shortid";
import strContains from "../utils/strContains";

export const getFilteredCards = ({cards,searchValue}, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title,searchValue));
export const getAllFavorite = ({cards})=>cards.filter(card=> card.isFavorite);
const createActionName = actionName => `app/columns/${actionName}`;
const REMOVE_CARD = createActionName('REMOVE_CARD'); 
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

export const removeCard = payload => ({type: REMOVE_CARD,payload})
export const changeIsFavorite = payload => ({type:TOGGLE_CARD_FAVORITE,payload});
export const addCard = payload => ({ type: ADD_CARD, payload });
const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_CARD:
        return [...statePart, { ...action.payload, id: shortid() }];
      case TOGGLE_CARD_FAVORITE:
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      case REMOVE_CARD:
        console.log(action.payload);
        console.log(statePart);
        return statePart.filter(card => card.id!==action.payload);
      default:
        return statePart;
    }
  }
  export default cardsReducer;