import { appState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


//Private
function _draw() {
  let cardsTemplate = ''
  appState.values.forEach(v => cardsTemplate += v.CardTemplate)
  setHTML('app', /*html*/`
  <div class="my-3">
    <button class="btn btn-primary text-white elevation-2" onclick="app.valuesController.addValue()">Add Value</button>  
    <button class="btn btn-warning text-white elevation-2" onclick="app.valuesController.clearAll()">Clear All</button>  
    <div class="values d-flex flex-wrap my-3">
      ${cardsTemplate}
    </div>
  </div>
  `)
}

//Public
export class ValuesController {
  constructor() {
    appState.on("values", _draw);
    _draw()
  }

  addValue() {
    valuesService.addValue()
  }

  /**
   * @param {string} id
   */
  async removeValue(id) {
    const yes = await Pop.confirm('Remove Value')
    if (yes) {
      valuesService.removeValue(id)
    }
  }
  
  async clearAll() {
    const yes = await Pop.confirm('Remove All Rolls?')
    if (yes) {
      valuesService.removeAll()
    }
  }

}
