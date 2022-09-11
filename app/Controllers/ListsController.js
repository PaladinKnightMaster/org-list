import { appState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { setHTML } from "../Utils/Writer.js"
import { getFormData } from "../Utils/FormHandler.js"

function _drawCard() {
  let template = ''
  appState.lists.forEach(l => template += l.Template)
  setHTML('card', template)
}

export class ListsController {
  constructor() {
    console.log("hello from controller")
    appState.on('lists', _drawCard)
    appState.on('tasks', _drawCard)

    _drawCard()

  }
  createCard() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let newCard = getFormData(form)
      listsService.createCard(newCard)
      // @ts-ignore
      form.reset()

    } catch (error) {
      console.log(error)
    }
  }
  removeCard(listsId) {
    if (window.confirm("Do you want to remove this list?🤔")) {


      console.log('card removed', listsId)
      try {
        listsService.removeCard(listsId)
      } catch (error) {
        console.log(error);
      }

    }
  }



}


