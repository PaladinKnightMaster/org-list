import { appState } from "../AppState.js"
import { List } from "../Models/List.js"
import { saveState } from "../Utils/Store.js"

class ListsService {
  createCard(newCard) {
    console.log('new card')
    let list = new List(newCard)
    appState.lists = [list, ...appState.lists]
    //Add Save State here
    saveState('lists', appState.lists)

  }


  removeCard(listsId) {
    let lists = appState.lists.filter(l => l.id != listsId);
    appState.lists = lists
    saveState('lists', appState.lists)
  }


}


export const listsService = new ListsService


